## **Create a key expiration policy**

If you plan to manually rotate access keys, Microsoft recommends that you set a key expiration policy.

A key expiration policy enables you to set a reminder for the rotation of the account access keys. The reminder is displayed if the specified interval has elapsed and the keys have not yet been rotated. After you create a key expiration policy, you can monitor your storage accounts for compliance to ensure that the account access keys are rotated regularly.

To create a key expiration policy in the Azure portal:

1. In the [Azure portal](https://portal.azure.com/), go to your storage account.
2. Under **Security + networking**, select **Access keys**. Your account access keys appear, as well as the complete connection string for each key.
3. Select the **Set rotation reminder** button. If the **Set rotation reminder** button is grayed out, you will need to rotate each of your keys. Follow the steps described in Manually rotate access keys to rotate the keys.
4. In Set a reminder to rotate access keys, select the **Enable key rotation reminders** checkbox and set a frequency for the reminder.
5. Select **Save** .

![create-a-key-expiration-policy](/public/images/create-a-key-expiration-policy.png)
