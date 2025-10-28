import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
  ip?: string;
}

const SUBMISSIONS_FILE = path.join(process.cwd(), 'data', 'contact-submissions.json');

// Ensure data directory exists
function ensureDataDirectory() {
  const dataDir = path.join(process.cwd(), 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
}

// Read existing submissions
function getSubmissions(): ContactSubmission[] {
  ensureDataDirectory();

  if (!fs.existsSync(SUBMISSIONS_FILE)) {
    return [];
  }

  try {
    const data = fs.readFileSync(SUBMISSIONS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading submissions:', error);
    return [];
  }
}

// Save submission
function saveSubmission(submission: ContactSubmission) {
  const submissions = getSubmissions();
  submissions.push(submission);

  fs.writeFileSync(SUBMISSIONS_FILE, JSON.stringify(submissions, null, 2));
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create submission
    const submission: ContactSubmission = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      message: message.trim(),
      timestamp: new Date().toISOString(),
      ip: request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    };

    // Save submission
    saveSubmission(submission);

    return NextResponse.json(
      { message: 'Contact form submitted successfully', id: submission.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    // Simple admin authentication check (you can enhance this)
    const authHeader = request.headers.get('authorization');
    const adminKey = process.env.ADMIN_KEY || 'samruddha-admin-2024';

    if (!authHeader || authHeader !== `Bearer ${adminKey}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const submissions = getSubmissions();

    return NextResponse.json({
      submissions: submissions.reverse(), // Latest first
      total: submissions.length
    });

  } catch (error) {
    console.error('Error fetching submissions:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
