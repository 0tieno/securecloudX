# Web Application Enumeration

Web application enumeration is the process of systematically discovering and cataloging web application components, directories, files, and potential entry points. This reconnaissance phase is crucial for understanding the attack surface before attempting exploitation.

## Introduction

Modern web applications are complex systems with multiple entry points, hidden directories, backup files, and administrative interfaces. Effective enumeration helps identify these components and potential vulnerabilities.

```
# Principle: Know your target before you attack
```

## Enumeration Methodology

### Information Gathering Phase

1. **Technology Identification**
2. **Directory and File Discovery**
3. **Parameter Discovery**
4. **Subdomain Enumeration**
5. **Content Discovery**

### Technology Stack Identification

Understanding the underlying technology helps tailor your approach:

```bash
# Using Wappalyzer-like tools
whatweb http://target.com

# Manual header analysis
curl -I http://target.com

# Checking for common frameworks
curl -s http://target.com | grep -i "powered by\|framework\|version"
```

## Core Enumeration Tools

### Gobuster - Directory and File Discovery

Gobuster is a fast directory/file brute-forcer written in Go.

```bash
# Basic directory enumeration
gobuster dir -u http://target.com -w /usr/share/wordlists/dirb/common.txt

# File extension enumeration
gobuster dir -u http://target.com -w /usr/share/wordlists/dirb/common.txt -x php,html,txt,js

# Advanced options
gobuster dir -u http://target.com -w /usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt -t 50 -x php,html,txt,js,zip,bak
```

Common useful wordlists:

- `/usr/share/wordlists/dirb/common.txt`
- `/usr/share/wordlists/dirbuster/directory-list-2.3-medium.txt`
- `/usr/share/seclists/Discovery/Web-Content/big.txt`

### Nikto - Web Vulnerability Scanner

Nikto performs comprehensive tests against web servers:

```bash
# Basic scan
nikto -h http://target.com

# Scan with specific options
nikto -h http://target.com -C all -Format htm -output target_nikto.html

# Scan specific port
nikto -h http://target.com:8080
```

### Burp Suite - Manual Testing

1. **Configure proxy** (127.0.0.1:8080)
2. **Browse the application** naturally
3. **Review site map** for discovered content
4. **Use Spider** for automated crawling
5. **Analyze parameters** and forms

## Advanced Enumeration Techniques

### Parameter Discovery

```bash
# Using ffuf for parameter fuzzing
ffuf -w /usr/share/seclists/Discovery/Web-Content/burp-parameter-names.txt -u http://target.com/page.php?FUZZ=test

# Using Arjun
python3 arjun.py -u http://target.com/page.php
```

### Subdomain Enumeration

```bash
# Using Sublist3r
sublist3r -d target.com -o subdomains.txt

# Using Amass
amass enum -d target.com -o amass_results.txt

# Using ffuf with DNS
ffuf -w /usr/share/seclists/Discovery/DNS/subdomains-top1million-5000.txt -u http://FUZZ.target.com
```

### Content Discovery

```bash
# Finding backup files
gobuster dir -u http://target.com -w /usr/share/seclists/Discovery/Web-Content/raft-medium-files.txt -x bak,old,backup,zip,tar,gz

# Common administrative panels
gobuster dir -u http://target.com -w /usr/share/seclists/Discovery/Web-Content/CMS/wordpress.txt
```

## Manual Enumeration Techniques

### Robots.txt Analysis

```bash
curl http://target.com/robots.txt
```

Look for:

- Disallowed directories
- Administrative paths
- Sensitive file locations
- Sitemap references

### Source Code Analysis

```bash
# Download and analyze source
wget -r -l 2 -k -p http://target.com

# Search for interesting patterns
grep -r "password\|admin\|config\|database" target.com/
```

### Error Page Analysis

Trigger error pages to gather information:

- Invalid parameters
- Non-existent pages
- Malformed requests
- SQL injection attempts

## Security Headers Analysis

```bash
# Check security headers
curl -I http://target.com

# Using securityheaders.com API
curl -s "https://securityheaders.com/?q=http://target.com&followRedirects=on" | grep -A 20 "Grade"
```

Important headers to check:

- Content-Security-Policy
- X-Frame-Options
- X-XSS-Protection
- Strict-Transport-Security

## Exercises

1. **Basic Directory Enumeration**:

   - Use Gobuster to enumerate directories on http://testphp.vulnweb.com/
   - Try different wordlists and compare results
   - Document all discovered directories and files

2. **Technology Stack Identification**:

   - Identify the web server, programming language, and framework
   - Use multiple tools (whatweb, curl, browser developer tools)
   - Create a technology profile for the target

3. **Comprehensive Enumeration**:

   - Perform a complete enumeration of a test application
   - Use Nikto for vulnerability scanning
   - Map out the entire application structure
   - Identify potential entry points

4. **Parameter Discovery Challenge**:
   - Find hidden parameters in a web application
   - Test for parameter pollution vulnerabilities
   - Document parameter functionality and potential security implications

## Enumeration Checklist

```
□ Technology identification complete
□ Directory/file enumeration performed
□ Subdomain discovery completed
□ Parameter fuzzing conducted
□ Source code analyzed
□ Error pages examined
□ Security headers reviewed
□ Administrative interfaces identified
□ Backup files searched
□ API endpoints discovered
```

## Common Files to Look For

### Configuration Files

- web.config (IIS)
- .htaccess (Apache)
- wp-config.php (WordPress)
- config.php, config.inc, configuration.php

### Backup Files

- index.php.bak
- database.sql
- backup.zip
- site.tar.gz

### Administrative Interfaces

- /admin/
- /administrator/
- /wp-admin/
- /phpmyadmin/

### Development Files

- test.php
- debug.php
- info.php
- phpinfo.php

## Documentation Template

```
TARGET: [URL]
DATE: [Date]
TOOLS USED: [List of tools]

TECHNOLOGY STACK:
- Web Server:
- Framework:
- Database:
- Programming Language:

DISCOVERED DIRECTORIES:
- [/admin/] - Administrative interface
- [/backup/] - Contains backup files
- [/uploads/] - File upload directory

DISCOVERED FILES:
- [config.php.bak] - Backup configuration file
- [database.sql] - Database dump
- [test.php] - Development test file

INTERESTING FINDINGS:
- [Description of notable discoveries]

POTENTIAL ATTACK VECTORS:
- [List potential entry points]

RECOMMENDATIONS:
- [Security recommendations]
```

## Best Practices

### Ethical Considerations

- Only enumerate systems you have permission to test
- Respect rate limits and avoid DoS conditions
- Document all activities for reporting
- Follow responsible disclosure principles

### Technical Tips

- Use multiple tools for comprehensive coverage
- Customize wordlists for specific targets
- Combine automated and manual techniques
- Validate discoveries manually
- Keep detailed notes throughout the process

Remember: Thorough enumeration is the foundation of successful penetration testing. Take time to understand your target completely before moving to exploitation phases.
