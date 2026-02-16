// Production Environment Detection
// Check if the visitor is NOT from localhost
if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    // Replace entire page content with custom message
    document.body.innerHTML = `
        <div style="display: flex; justify-content: center; align-items: center; height: 100vh; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); font-family: 'Inter', sans-serif;">
            <div style="text-align: center; color: white; padding: 40px; background: rgba(0,0,0,0.2); border-radius: 20px; max-width: 600px;">
                <h1 style="font-size: 3rem; margin-bottom: 20px;">🚧 Test Mode</h1>
                <p style="font-size: 1.5rem; line-height: 1.6;">
                    You are gay, I love your big shit \<3
                </p>
            </div>
        </div>
    `;
}
