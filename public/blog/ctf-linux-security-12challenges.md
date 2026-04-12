---
layout: post
title: "CTF: 12 Linux Security Challenges for Real-World Skills"
date: 2025-07-16
author: s!rr0nn3y
categories:
  - ctf
  - linux
  - security
---
Today, I tackled 12 hands-on Capture the Flag (CTF) challenges designed to sharpen my Linux, networking, and cybersecurity skills. Each challenge introduced a new concept or technique, from file forensics to covert network channels.

## Challenge 1: The Hidden File

Goal: Find and read a hidden file in your home directory  
Skill: Linux hidden file handling

> Learned to use `ls -a` to show hidden files (those starting with a dot), and `cat`, `less`, or `nano` to view their content.

```bash
ls -a
ls -la
cat .flag.txt
```

## Challenge 2: The Secret File

Goal: Locate a file with "secret" in its name under `~`  
Skill: File searching

> Mastered `find` and explored content-based search with `grep`.

```bash
find ~ -iname "*secret*"
grep -r "FLAG" ~
```


## Challenge 3: The Largest Log

Goal: Identify the largest log file in `/var/log`  
Skill: Disk usage inspection

```bash
du -ah /var/log | sort -hr | head -n 5
less /var/log/syslog
```

## Challenge 4: The User Detective

Goal: Find the user with UID 1002 and check their login files  
Skill: User enumeration

```bash
awk -F: '$3 == 1002 {print $1}' /etc/passwd
cat /home/username/.bashrc
```

## Challenge 5: The Permissive File

Goal: Find a file in `/opt` with 777 permissions  
Skill: Permission auditing

```bash
find /opt -type f -perm 0777
ls -l
chmod 644 file.txt
```

## Challenge 6: The Hidden Service

Goal: Connect to a service on port 8080  
Skill: Port inspection

```bash
lsof -i :8080
netstat -tulnp
curl http://localhost:8080
```

## Challenge 7: The Encoded Secret

Goal: Decode a flag base64-encoded twice  
Skill: Base64 decoding

```bash
cat flag.txt | base64 --decode | base64 --decode
```

## Challenge 8: SSH Key Authentication

Goal: Set up SSH key-based login and find hidden flag in `.ssh`  
Skill: SSH and dotfile inspection

```bash
ssh-keygen
cat id_rsa.pub >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
ls -la ~/.ssh
```

## Challenge 9: DNS Troubleshooting

Goal: Fix a broken DNS config to reveal a flag  
Skill: Network troubleshooting

```bash
cat /etc/resolv.conf
ping google.com
dig github.com
```

## Challenge 10: Remote Upload

Goal: Upload a file to `~/ctf_challenges`  
Skill: File transfer

```bash
scp flag.txt user@host:~/ctf_challenges/
rsync -av flag.txt user@host:~/ctf_challenges/
```

## Challenge 11: Web Configuration

Goal: Fix a non-standard Nginx port  
Skill: Web server configuration

```bash
nano /etc/nginx/sites-available/default
sudo systemctl restart nginx
nginx -t
```

## Challenge 12: Network Traffic Analysis

Goal: Detect a flag hidden in ping traffic  
Skill: Packet analysis

```bash
tcpdump -i any -w dump.pcap
tshark -r dump.pcap
strings dump.pcap | grep FLAG
```

## Final Reflection

This journey helped me strengthen:

- Linux fundamentals  
- Security analysis & troubleshooting  
- Comfort with core tools and services

Each flag was more than a challenge — it was a real lesson in practical command-line security.

Try this CTF series yourself: [Learn-to-cloud](https://github.com/learntocloud/linux-ctfs)
