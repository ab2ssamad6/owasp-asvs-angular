import { AsvsCategory } from '../models/asvs.model';

export const ASVS_DATA: AsvsCategory[] = [
  {
    id: 'V1', title: 'Architecture, Design & Threat Modeling',
    items: [
      { id: '1.1.1', desc: 'Verify the use of a secure software development lifecycle that addresses security in all stages of development.', level: 1 },
      { id: '1.1.2', desc: 'Verify the use of threat modeling for every design change or sprint planning to identify threats, plan countermeasures, facilitate appropriate risk responses, and guide security testing.', level: 2 },
      { id: '1.1.3', desc: 'Verify that all user stories and features contain functional security constraints.', level: 2 },
      { id: '1.1.4', desc: 'Verify documentation and justification of all the application\'s trust boundaries, components, and significant data flows.', level: 2 },
      { id: '1.2.1', desc: 'Verify the use of unique or special low-privilege operating system accounts for all application components, services, and servers.', level: 2 },
      { id: '1.2.2', desc: 'Verify that communications between application components, including APIs, middleware and data layers, are authenticated.', level: 2 },
      { id: '1.4.1', desc: 'Verify that trusted enforcement points such as access control gateways, servers, and serverless functions enforce access controls.', level: 1 },
      { id: '1.5.1', desc: 'Verify that input and output requirements clearly define how to handle and process data based on type, content, and applicable laws.', level: 2 },
      { id: '1.6.1', desc: 'Verify that there is an explicit policy for management of cryptographic keys and the lifecycle of keys is managed properly.', level: 2 },
    ]
  },
  {
    id: 'V2', title: 'Authentication',
    items: [
      { id: '2.1.1', desc: 'Verify that user set passwords are at least 12 characters in length (after multiple spaces are combined).', level: 1 },
      { id: '2.1.2', desc: 'Verify that passwords of at least 64 characters are permitted and that passwords of more than 128 characters are denied.', level: 1 },
      { id: '2.1.3', desc: 'Verify that password truncation is not performed.', level: 1 },
      { id: '2.1.5', desc: 'Verify users can change their password.', level: 1 },
      { id: '2.1.6', desc: 'Verify that password change functionality requires the user\'s current and new password.', level: 1 },
      { id: '2.1.7', desc: 'Verify that passwords submitted during account registration, login, and password change are checked against a set of breached passwords.', level: 1 },
      { id: '2.2.1', desc: 'Verify that anti-automation controls are effective at mitigating breached credential testing, brute force, and account lockout attacks.', level: 1 },
      { id: '2.2.2', desc: 'Verify that the use of weak authenticators (such as SMS and email) is limited to secondary verification and approval of transactions.', level: 1 },
      { id: '2.3.1', desc: 'Verify system generated initial passwords or activation codes are at least 6 characters long, may contain letters and numbers, and expire after a short period.', level: 1 },
      { id: '2.4.1', desc: 'Verify that passwords are stored in a form that is resistant to offline attacks.', level: 1 },
      { id: '2.5.1', desc: 'Verify that a system generated initial activation secret or recovery code is not sent in clear text to the user.', level: 1 },
      { id: '2.6.1', desc: 'Verify that lookup secrets can only be used once.', level: 2 },
      { id: '2.7.1', desc: 'Verify that clear text out of band (NIST \'restricted\') authenticators, such as SMS or PSTN, are not offered by default.', level: 1 },
      { id: '2.8.1', desc: 'Verify that time-based OTPs have a defined lifetime before expiring.', level: 1 },
    ]
  },
  {
    id: 'V3', title: 'Session Management',
    items: [
      { id: '3.1.1', desc: 'Verify the application never reveals session tokens in URL parameters.', level: 1 },
      { id: '3.2.1', desc: 'Verify the application generates a new session token on user authentication.', level: 1 },
      { id: '3.2.2', desc: 'Verify that session tokens possess at least 64 bits of entropy.', level: 1 },
      { id: '3.2.3', desc: 'Verify the application only stores session tokens in the browser using secure methods such as appropriately secured cookies.', level: 1 },
      { id: '3.3.1', desc: 'Verify that logout and expiration invalidate the session token, such that the back button or downstream relying party does not resume an authenticated session.', level: 1 },
      { id: '3.3.2', desc: 'If authenticators permit users to remain logged in, verify that re-authentication occurs periodically.', level: 1 },
      { id: '3.4.1', desc: 'Verify that cookie-based session tokens have the \'Secure\' attribute set.', level: 1 },
      { id: '3.4.2', desc: 'Verify that cookie-based session tokens have the \'HttpOnly\' attribute set.', level: 1 },
      { id: '3.4.3', desc: 'Verify that cookie-based session tokens utilize the \'SameSite\' attribute.', level: 1 },
      { id: '3.5.1', desc: 'Verify the application does not treat OAuth and refresh tokens as the presence of the subscriber and allows users to terminate trust relationships.', level: 2 },
      { id: '3.6.1', desc: 'Verify that relying parties specify the maximum authentication time to CSPs and that CSPs re-authenticate the subscriber.', level: 3 },
    ]
  },
  {
    id: 'V4', title: 'Access Control',
    items: [
      { id: '4.1.1', desc: 'Verify that the application enforces access control rules on a trusted service layer, especially if client-side access control is present.', level: 1 },
      { id: '4.1.2', desc: 'Verify that all user and data attributes and policy information used by access controls cannot be manipulated by end users unless specifically authorized.', level: 1 },
      { id: '4.1.3', desc: 'Verify that the principle of least privilege exists - users should only be able to access functions, data files, URLs, controllers, services, and other resources for which they possess specific authorization.', level: 1 },
      { id: '4.1.5', desc: 'Verify that access controls fail securely including when an exception occurs.', level: 1 },
      { id: '4.2.1', desc: 'Verify that sensitive data and APIs are protected against Insecure Direct Object Reference (IDOR) attacks.', level: 1 },
      { id: '4.2.2', desc: 'Verify that the application or framework enforces a strong anti-CSRF mechanism to protect authenticated functionality.', level: 1 },
      { id: '4.3.1', desc: 'Verify administrative interfaces use appropriate multi-factor authentication to prevent unauthorized use.', level: 1 },
      { id: '4.3.2', desc: 'Verify that directory browsing is disabled unless deliberately desired.', level: 1 },
      { id: '4.3.3', desc: 'Verify the application has additional authorization for lower value systems, or segregation of duties for high value applications.', level: 2 },
    ]
  },
  {
    id: 'V5', title: 'Validation, Sanitization & Encoding',
    items: [
      { id: '5.1.1', desc: 'Verify that the application has defenses against HTTP parameter pollution attacks.', level: 1 },
      { id: '5.1.2', desc: 'Verify that frameworks protect against mass parameter assignment attacks, or that the application has countermeasures to protect against unsafe parameter assignment.', level: 1 },
      { id: '5.1.3', desc: 'Verify that all input is validated using positive validation (allowlists).', level: 1 },
      { id: '5.1.4', desc: 'Verify that structured data is strongly typed and validated against a defined schema including allowed characters, length and pattern.', level: 1 },
      { id: '5.2.1', desc: 'Verify that all untrusted HTML input from WYSIWYG editors or similar is properly sanitized with an HTML sanitizer library or framework feature.', level: 1 },
      { id: '5.2.3', desc: 'Verify that the application sanitizes user input before passing to mail systems to protect against SMTP or IMAP injection.', level: 1 },
      { id: '5.3.1', desc: 'Verify that output encoding is relevant for the interpreter and context required.', level: 1 },
      { id: '5.3.3', desc: 'Verify that context-aware output escaping protects against reflected, stored, and DOM based XSS.', level: 1 },
      { id: '5.3.4', desc: 'Verify that data selection or database queries use parameterized queries, ORMs, entity frameworks or are otherwise protected from database injection attacks.', level: 1 },
      { id: '5.4.1', desc: 'Verify that the application uses memory-safe string, safer memory copy and pointer arithmetic to detect or prevent stack, buffer, or heap overflows.', level: 2 },
    ]
  },
  {
    id: 'V6', title: 'Stored Cryptography',
    items: [
      { id: '6.1.1', desc: 'Verify that regulated private data is stored encrypted whilst at rest.', level: 2 },
      { id: '6.1.2', desc: 'Verify that regulated health data is stored encrypted whilst at rest.', level: 2 },
      { id: '6.2.1', desc: 'Verify that all cryptographic modules fail securely, and errors are handled in a way that does not enable Padding Oracle attacks.', level: 1 },
      { id: '6.2.2', desc: 'Verify that industry proven or government approved cryptographic algorithms, modes, and libraries are used.', level: 2 },
      { id: '6.2.3', desc: 'Verify that encryption initialization vector, cipher configuration, and block modes are configured securely.', level: 2 },
      { id: '6.2.5', desc: 'Verify that known insecure block modes (ECB), padding modes (PKCS#1 v1.5), and weak hashing algorithms are not used.', level: 2 },
      { id: '6.3.1', desc: 'Verify that all random numbers, random file names, random GUIDs, and random strings are generated using a cryptographically secure random number generator.', level: 2 },
      { id: '6.4.1', desc: 'Verify that a secrets management solution is used to manage secrets such as credentials, APIs, and encryption keys.', level: 2 },
    ]
  },
  {
    id: 'V7', title: 'Error Handling & Logging',
    items: [
      { id: '7.1.1', desc: 'Verify that the application does not log credentials or payment details. Session tokens should only be stored in logs in an irreversible, hashed form.', level: 1 },
      { id: '7.1.2', desc: 'Verify that the application does not log other sensitive data as defined under local privacy laws or relevant security policy.', level: 1 },
      { id: '7.1.3', desc: 'Verify that the application logs security relevant events including successful and failed authentication events, access control failures, deserialization failures and input validation failures.', level: 2 },
      { id: '7.2.1', desc: 'Verify that all authentication decisions are logged, without storing sensitive session tokens or passwords.', level: 2 },
      { id: '7.3.1', desc: 'Verify that the application appropriately encodes user-supplied data to prevent log injection.', level: 2 },
      { id: '7.4.1', desc: 'Verify that a generic message is shown when an unexpected or security sensitive error occurs.', level: 1 },
      { id: '7.4.2', desc: 'Verify that exception handling is used across the codebase to account for expected and unexpected error conditions.', level: 2 },
    ]
  },
  {
    id: 'V8', title: 'Data Protection',
    items: [
      { id: '8.1.1', desc: 'Verify the application protects sensitive data from being cached in server components such as load balancers and application caches.', level: 2 },
      { id: '8.2.1', desc: 'Verify the application sets sufficient anti-caching headers so that sensitive data is not cached in modern browsers.', level: 1 },
      { id: '8.2.2', desc: 'Verify that data stored in client side storage does not contain sensitive data or PII.', level: 1 },
      { id: '8.3.1', desc: 'Verify that sensitive data is sent to the server in the HTTP message body or headers, and that query string parameters from any HTTP verb do not contain sensitive data.', level: 1 },
      { id: '8.3.2', desc: 'Verify that users have a method to remove or export their data on demand.', level: 1 },
      { id: '8.3.4', desc: 'Verify that all sensitive data created and processed by the application has been identified, and ensure that a policy is in place on how to deal with sensitive data.', level: 1 },
      { id: '8.3.6', desc: 'Verify that sensitive information contained in memory is overwritten as soon as it is no longer required.', level: 2 },
    ]
  },
  {
    id: 'V9', title: 'Communication Security',
    items: [
      { id: '9.1.1', desc: 'Verify that TLS is used for all client connectivity, and does not fall back to insecure or unencrypted communications.', level: 1 },
      { id: '9.1.2', desc: 'Verify using up to date TLS testing tools that only strong cipher suites are enabled.', level: 1 },
      { id: '9.1.3', desc: 'Verify that only the latest recommended versions of the TLS protocol are enabled, such as TLS 1.2 and TLS 1.3.', level: 1 },
      { id: '9.2.1', desc: 'Verify that connections to and from the server use trusted TLS certificates.', level: 2 },
      { id: '9.2.2', desc: 'Verify that encrypted communications such as TLS are used for all connections to external systems that involve sensitive information or functions.', level: 2 },
      { id: '9.2.3', desc: 'Verify that all encrypted connections to external systems that involve sensitive information or functions are authenticated.', level: 2 },
    ]
  },
  {
    id: 'V13', title: 'API & Web Service Security',
    items: [
      { id: '13.1.1', desc: 'Verify that all application components use the same encodings and parsers to avoid parsing attacks.', level: 1 },
      { id: '13.1.2', desc: 'Verify that access to administration and management functions is limited to authorized administrators.', level: 1 },
      { id: '13.1.3', desc: 'Verify API URLs do not expose sensitive information, such as the API key, session tokens etc.', level: 1 },
      { id: '13.2.1', desc: 'Verify that enabled RESTful HTTP methods are a valid choice for the user or action, preventing normal users using DELETE or PUT on protected API or resources.', level: 1 },
      { id: '13.2.2', desc: 'Verify that JSON schema validation is in place and verified before accepting input.', level: 1 },
      { id: '13.2.3', desc: 'Verify that RESTful web services that utilize cookies are protected from Cross-Site Request Forgery.', level: 1 },
      { id: '13.3.1', desc: 'Verify that XSD schema validation takes place to ensure a properly formed XML document, followed by validation of each input field before any processing of that data takes place.', level: 1 },
      { id: '13.4.1', desc: 'Verify that query whitelisting or depth limiting is used to prevent GraphQL or data layer expression Denial of Service attacks.', level: 2 },
    ]
  },
  {
    id: 'V14', title: 'Configuration',
    items: [
      { id: '14.1.1', desc: 'Verify that the application build and deployment processes are performed in a secure and repeatable way.', level: 2 },
      { id: '14.2.1', desc: 'Verify that all components are up to date, preferably using a dependency checker during build or compile time.', level: 1 },
      { id: '14.2.2', desc: 'Verify that all unneeded features, documentation, sample applications and configurations are removed.', level: 1 },
      { id: '14.3.1', desc: 'Verify that web or application server and application framework error messages are configured to deliver user actionable, customized responses.', level: 1 },
      { id: '14.3.2', desc: 'Verify that web or application server and framework debug modes are disabled in production.', level: 1 },
      { id: '14.4.1', desc: 'Verify that every HTTP response contains a Content-Type header with a safe character set.', level: 1 },
      { id: '14.4.3', desc: 'Verify that a Content Security Policy (CSP) response header is in place that helps mitigate impact for XSS attacks.', level: 1 },
      { id: '14.4.4', desc: 'Verify that all responses contain X-Content-Type-Options: nosniff.', level: 1 },
      { id: '14.4.5', desc: 'Verify that HTTP Strict Transport Security headers are included on all responses and for all subdomains.', level: 1 },
      { id: '14.4.6', desc: 'Verify that a suitable Referrer-Policy header is included to avoid exposing sensitive information in the URL through the Referer header.', level: 1 },
    ]
  }
];
