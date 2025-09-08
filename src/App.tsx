import './App.css'

function App() {
    return (
        <main className="jb-page">
            <header className="jb-hero">
                <div className="jb-container">
                    <div className="jb-hero-badge">Support</div>
                    <h1 className="jb-hero-title">
                        Paper Trail Invoice — Help Center
                    </h1>
                    <p className="jb-hero-sub">
                        Get answers, contact support, and explore guides for billing, invoices, and account management.
                    </p>
                </div>
                <div className="jb-hero-accent" aria-hidden="true" />
            </header>

            {/* Privacy Policy */}
            <section id="privacy" className="jb-faq">
                <div className="jb-container">
                    <h2>Privacy Policy</h2>
                    <p><strong>Effective Date: Sept 8, 2025</strong></p>
                    <p>
                        Paper Trail Invoice (“we”, “our”, “us”) values your privacy. This Privacy Policy
                        explains how we handle your information when you use our mobile application.
                    </p>

                    <h3>1. Information We Collect</h3>
                    <ul>
                        <li><strong>Camera Access:</strong> Used only to capture invoices.</li>
                        <li><strong>Invoice Data:</strong> OCR text and scanned files are stored locally on your device.</li>
                        <li><strong>Support Info:</strong> If you contact us, we collect your email and message content.</li>
                    </ul>

                    <h3>2. How We Use Information</h3>
                    <ul>
                        <li>Provide invoice capture and storage functionality.</li>
                        <li>Improve app performance and troubleshoot issues.</li>
                        <li>Communicate with you if you reach out for support.</li>
                    </ul>

                    <h3>3. Data Storage & Security</h3>
                    <p>
                        Your data is stored only on your device. We do not transmit or sell personal data.
                        Standard device security applies, but no system is 100% secure.
                    </p>

                    <h3>4. Sharing of Data</h3>
                    <p>
                        We do not share your personal data with third parties.
                        Any system-level permissions are strictly for app functionality (e.g., Camera).
                    </p>

                    <h3>5. Your Rights</h3>
                    <p>
                        You may delete stored invoices directly in the app or by uninstalling it.
                        For support, email us at <a href="mailto:yadav.priyansh@outlook.com">yadav.priyansh@outlook.com</a>.
                    </p>

                    <h3>6. Updates</h3>
                    <p>
                        We may update this policy from time to time. Changes will be posted here
                        and in the app’s support section.
                    </p>
                </div>
            </section>

            <section id="contact" className="jb-contact">
                <div className="jb-container">
                    <h2>Contact Support</h2>
                    <p className="jb-hint" style={{ margin: '0 0 10px' }}>
                        Email: <a href="mailto:yadav.priyansh@outlook.com">yadav.priyansh@outlook.com</a>
                    </p>
                    <div className="jb-form-actions">
                        <a
                            className="jb-btn jb-btn-primary"
                            href="mailto:yadav.priyansh@outlook.com?subject=Support%20Request%20-%20Paper%20Trail%20Invoice"
                        >
                            Email Support
                        </a>
                    </div>
                </div>
            </section>

            <footer className="jb-footer">
                <div className="jb-container">
                    <p>Paper Trail Invoice • Support</p>
                    <nav>
                        <a href="#status">Status</a>
                        <a href="/privacy.pdf" target="_blank" rel="noopener noreferrer">Privacy</a>
                        <a href="#terms">Terms</a>
                    </nav>
                </div>
            </footer>
        </main>
    )
}

export default App
