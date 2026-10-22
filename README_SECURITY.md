# Security Configuration Guide

## ⚠️ Important Notice

All sensitive information in this project has been sanitized and replaced with placeholders. Before deployment, you must configure the actual credentials and keys.

---

## Configuration Steps

### Step 1: Copy Configuration Templates

```bash
# Copy the application configuration file
cp source/backend_service/sample/src/main/resources/application.yml.example \
   source/backend_service/sample/src/main/resources/application.yml

# Copy the database initialization script
cp source/mysql/init.sql.example source/mysql/init.sql

# Copy the database privileges script
cp source/mysql/privileges.sql.example source/mysql/privileges.sql
```

### Step 2: Configure Sensitive Information

Edit the following files and replace all placeholders in the format `[YOUR_*]`:

1. `source/backend_service/sample/src/main/resources/application.yml`
2. `source/mysql/init.sql`
3. `source/mysql/privileges.sql`

For detailed configuration instructions, please refer to the `CONFIG_GUIDE.md` file.

### Step 3: Verify the Configuration

Before starting the service, make sure:

- [ ] All `[YOUR_*]` placeholders have been replaced
- [ ] Database connection details are correct
- [ ] DJI Cloud API credentials are valid
- [ ] All server addresses are reachable
- [ ] Passwords meet security requirements (strong passwords)

---

## Configuration File Management

### Using Environment Variables (Recommended)

You can use environment variables to manage sensitive configuration:

```yaml
spring:
  datasource:
    url: jdbc:mysql://${MYSQL_HOST:localhost}:3306/cloud_sample
    username: ${MYSQL_USERNAME}
    password: ${MYSQL_PASSWORD}
```

Then set the environment variables when starting the service:

```bash
export MYSQL_HOST=your-mysql-host
export MYSQL_USERNAME=your-username
export MYSQL_PASSWORD=your-password
```

### Using Configuration Management Tools

For production environments, it is recommended to use a dedicated configuration management tool:

- Spring Cloud Config
- HashiCorp Vault
- AWS Secrets Manager
- Azure Key Vault
- Kubernetes Secrets

---

## Security Checklist

Before deployment, confirm the following:

- [ ] The configuration files are added to `.gitignore`
- [ ] No real IP addresses, passwords, or keys are included
- [ ] The database uses strong passwords
- [ ] SSL/TLS is enabled in production environments
- [ ] Database and service network access is restricted
- [ ] Configuration files are backed up regularly (encrypted storage)
- [ ] Team members are aware of the security requirements

---

## Getting Help

If you encounter problems during configuration:

1. Review `CONFIG_GUIDE.md` for detailed setup instructions
2. Check the service log files
3. Refer to the official DJI documentation: https://developer.dji.com/
4. Contact the technical support team

---

## File List

Configuration-related files:

```
.
├── .gitignore                          # Git ignore configuration
├── CONFIG_GUIDE.md                     # Detailed configuration guide
├── README_SECURITY.md                  # This file
├── source/
│   ├── backend_service/
│   │   └── sample/
│   │       └── src/
│   │           └── main/
│   │               └── resources/
│   │                   ├── application.yml          # Actual configuration (not committed)
│   │                   └── application.yml.example  # Configuration template
│   └── mysql/
│       ├── init.sql                    # Actual initialization script (not committed)
│       ├── init.sql.example            # Initialization script template
│       ├── privileges.sql              # Actual privileges script (not committed)
│       └── privileges.sql.example      # Privileges script template
```

---

**Last Updated:** 2024

**Note:** Please keep your configuration files and credentials safe and do not share them with unauthorized persons.
