# Check for key expiration policy violations

You can monitor your storage accounts with Azure Policy to ensure that account access keys have been rotated within the recommended period. Azure Storage provides a built-in policy for ensuring that storage account access keys are not expired.

### **Assign the built-in policy for a resource scope**

Follow these steps to assign the built-in policy to the appropriate scope in the Azure portal:

1. In the [Azure portal](https://portal.azure.com/), search for Policy to display the Azure Policy dashboard.
2. In the **Authoring** section, select **Assignments**.
3. Choose **Assign policy**.
4. On the **Basics** tab of the **Assign policy** page, in the **Scope** section, specify the scope for the policy assignment. Select the More button to choose the subscription and optional resource group.

![check-for-key-expiration-policy-violations.png](/public/images/check-for-key-expiration-policy-violations.png)


5. For the Policy definition field, select the More button, and enter storage account keys in the Search field. Select the policy definition named Storage account keys should not be expired.

![policy-creation](/images/policy-creation.png)

1. Select Review + create to assign the policy definition to the specified scope.

![policy-creation2.png](/images/policy-creation2.png)