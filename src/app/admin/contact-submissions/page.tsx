"use client";
import { useState, useEffect } from "react";
import { Metadata } from "next";

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
  ip?: string;
}

interface SubmissionsResponse {
  submissions: ContactSubmission[];
  total: number;
}

const ContactSubmissionsPage = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>("");
  const [adminKey, setAdminKey] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticate = async () => {
    if (!adminKey.trim()) {
      setError("Please enter admin key");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch('/api/contact', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${adminKey}`,
        },
      });

      if (response.ok) {
        const data: SubmissionsResponse = await response.json();
        setSubmissions(data.submissions);
        setIsAuthenticated(true);
        setError("");
      } else {
        setError("Invalid admin key");
        setIsAuthenticated(false);
      }
    } catch (err) {
      setError("Network error. Please try again.");
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      timeZone: 'Asia/Kolkata'
    });
  };

  const exportToCSV = () => {
    const headers = ['ID', 'Name', 'Email', 'Message', 'Timestamp', 'IP'];
    const csvContent = [
      headers.join(','),
      ...submissions.map(sub => [
        sub.id,
        `"${sub.name}"`,
        sub.email,
        `"${sub.message.replace(/"/g, '""')}"`,
        sub.timestamp,
        sub.ip || 'unknown'
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `contact-submissions-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Admin Access
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Enter admin key to view contact submissions
            </p>
          </div>
          <div className="mt-8 space-y-6">
            <div>
              <label htmlFor="adminKey" className="sr-only">
                Admin Key
              </label>
              <input
                id="adminKey"
                name="adminKey"
                type="password"
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && authenticate()}
                placeholder="Enter admin key"
                className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm"
              />
            </div>

            {error && (
              <div className="text-red-600 text-sm text-center">
                {error}
              </div>
            )}

            <div>
              <button
                onClick={authenticate}
                disabled={loading}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
              >
                {loading ? 'Authenticating...' : 'Access Admin Panel'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Contact Submissions
                </h1>
                <p className="text-sm text-gray-600">
                  Total submissions: {submissions.length}
                </p>
              </div>
              <div className="flex space-x-3">
                <button
                  onClick={exportToCSV}
                  disabled={submissions.length === 0}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-50"
                >
                  Export CSV
                </button>
                <button
                  onClick={() => {
                    setIsAuthenticated(false);
                    setAdminKey("");
                    setSubmissions([]);
                  }}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Logout
                </button>
              </div>
            </div>

            {submissions.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">No contact submissions yet.</p>
              </div>
            ) : (
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Contact Info
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Message
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Submitted
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        IP
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {submissions.map((submission) => (
                      <tr key={submission.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              {submission.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              <a
                                href={`mailto:${submission.email}`}
                                className="text-primary hover:underline"
                              >
                                {submission.email}
                              </a>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900 max-w-xs">
                            <p className="line-clamp-3">
                              {submission.message}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {formatDate(submission.timestamp)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {submission.ip || 'unknown'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSubmissionsPage;
