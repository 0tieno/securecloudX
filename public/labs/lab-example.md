# Security Fundamentals (test_example)

Reconnaissance is the first phase in ethical hacking and penetration testing. It involves gathering information about the target without active engagement. This passive information gathering helps identify potential entry points for deeper testing later.

## Introduction

Before any attack can be executed, the attacker needs to gather as much information as possible about the target. This is called reconnaissance or footprinting. The more information an attacker has about a target, the more successful the attack will be.

```
# Remember: Information is power in security testing
```

## Reconnaissance Techniques

### OSINT (Open Source Intelligence)

OSINT refers to collecting information from publicly available sources:

- Search engines
- Social media
- Public records
- Company websites
- Job postings
- DNS records

### Passive vs. Active Reconnaissance

**Passive Reconnaissance**: Gathering information without directly interacting with the target.

- Example: Checking the target's website
- Example: Looking up WHOIS records

**Active Reconnaissance**: Directly interacting with the target.

- Example: Port scanning
- Example: Network mapping

## Core Tools

### WHOIS Lookup

WHOIS databases contain registration information for domain names and IP addresses.

```bash
whois example.com
```

Key information retrieved:

- Registrar
- Registration dates
- Nameservers
- Contact information (if not private)

### DNS Enumeration with dig

DNS records can reveal valuable information about the target organization.

```bash
dig example.com ANY
dig example.com MX
dig example.com NS
```

### Subdomain Discovery

Finding subdomains can expand your attack surface.

```bash
# Using Sublist3r
sublist3r -d example.com

# Using Amass
amass enum -d example.com
```

### Network Scanning with nmap

```bash
# Basic scan
nmap example.com

# Comprehensive scan
nmap -A -T4 example.com

# Stealthy scan
nmap -sS -T2 example.com
```

## Security Considerations

- Always obtain proper authorization before conducting reconnaissance
- Document all activities performed
- Be aware of legal implications
- Respect target boundaries

## Exercises

1. Perform a WHOIS lookup on a domain of your choice and identify:

   - Registrar
   - Registration date
   - Expiration date
   - Nameservers

2. Use the `dig` command to find all DNS records for a domain:

   ```bash
   dig yourdomain.com ANY
   ```

   - List all record types found
   - What information might be useful to an attacker?

3. Use nmap to perform a basic scan of a target (use your own lab environment):

   ```bash
   nmap -v -A 192.168.1.x
   ```

   - Identify open ports
   - Identify running services
   - Determine OS information if available

4. Using Shodan.io, search for a specific service (e.g., "apache" or "nginx")
   - How many results are returned?
   - What types of organizations appear in the results?
   - What security issues can you identify from the search?

## Advanced Topics

- Social engineering reconnaissance
- Physical reconnaissance
- Advanced tool usage (Maltego, Recon-ng)
- Automating reconnaissance with scripts

## Documentation Template

For each target, document:

```
Target: [domain/IP]
Date: [date]
Tools used: [list of tools]

FINDINGS:
- Domain Information:
  - Registrar:
  - Dates:
  - Contacts:

- Network Information:
  - IP ranges:
  - Open ports:
  - Services:

- Web Presence:
  - Technologies used:
  - Subdomains:
  - Content discoveries:

POTENTIAL VULNERABILITIES:
- [List discovered vulnerabilities]
```

Remember, good documentation is crucial for effective penetration testing.
