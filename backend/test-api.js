// Simple test script to verify the backend API
// Run this after starting the backend server

const testContactSubmission = async () => {
  try {
    console.log('🧪 Testing contact form submission...');
    
    const response = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        company: 'Test Company',
        message: 'This is a test message to verify the API is working correctly.'
      }),
    });
    
    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ Contact form submission successful:', result);
    } else {
      console.log('❌ Contact form submission failed:', result);
    }
    
  } catch (error) {
    console.error('❌ Error testing API:', error);
  }
};

const testHealthCheck = async () => {
  try {
    console.log('🏥 Testing health check...');
    
    const response = await fetch('http://localhost:5000/health');
    const result = await response.json();
    
    if (response.ok) {
      console.log('✅ Health check successful:', result);
    } else {
      console.log('❌ Health check failed:', result);
    }
    
  } catch (error) {
    console.error('❌ Error testing health check:', error);
  }
};

const runTests = async () => {
  console.log('🚀 Starting API tests...\n');
  
  await testHealthCheck();
  console.log('');
  await testContactSubmission();
  
  console.log('\n✨ Tests completed!');
};

// Run tests if this file is executed directly
if (typeof window === 'undefined') {
  runTests();
}
