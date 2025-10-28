const ContactSubmissionsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center">
          <div className="mx-auto h-24 w-24 rounded-full bg-primary/10 flex items-center justify-center mb-6">
            <svg
              className="h-12 w-12 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
          </div>
          
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Contact Form Submissions
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            We've integrated with Formspree for better contact form management. 
            All submissions are now handled through Formspree's professional dashboard.
          </p>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              ✅ Formspree Integration Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="space-y-2">
                <p className="text-sm text-gray-600">• Automatic email notifications</p>
                <p className="text-sm text-gray-600">• Built-in spam protection</p>
                <p className="text-sm text-gray-600">• Professional dashboard</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">• CSV export functionality</p>
                <p className="text-sm text-gray-600">• Reliable delivery guarantee</p>
                <p className="text-sm text-gray-600">• No server maintenance required</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <a
              href="https://formspree.io/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
            >
              Access Formspree Dashboard
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>

            <div className="text-sm text-gray-500">
              <p>Login with your Formspree account to view all contact submissions,</p>
              <p>export data, and manage form settings.</p>
            </div>
          </div>

          <div className="mt-12 bg-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              📋 Setup Instructions
            </h3>
            <div className="text-left text-sm text-blue-800 space-y-2">
              <p>1. Create a free account at <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" className="underline">formspree.io</a></p>
              <p>2. Create a new form and copy the Form ID</p>
              <p>3. Add <code className="bg-blue-100 px-2 py-1 rounded">NEXT_PUBLIC_FORMSPREE_ID</code> to your environment variables</p>
              <p>4. Deploy your site and test the contact form</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSubmissionsPage;
