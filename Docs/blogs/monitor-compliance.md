# Monitor compliance with the key expiration policy

In today's blog (6/31), we are going to learn about how to monitor compliance with the key expiration policy hands-on. See yesterday's blog first to understand this.

To monitor your storage accounts for compliance with the key expiration policy, follow these steps:

1. On the Azure Policy dashboard, locate the built-in policy definition for the scope that you specified in the policy assignment. You can search for *Storage account keys, should not be expired* in the **Search** box to filter for the built-in policy.
2. Select the policy name with the desired scope.
3. On the **Policy assignment** page for the built-in policy, select **View compliance**. Any storage accounts in the specified subscription and resource group that do not meet the policy requirements appear in the compliance report. To bring a storage account into compliance, rotate the account access keys.

![monitor-compliance](/images/monitor-compliance.png)


And all that is good to know. See you in the next blog tomorrow, blog number 31.[6]

---

a-blog-a-day-october-challenge/31.[5]