/* 
 * Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
 * See LICENSE in the project root for license information.
 */

var config ={
    /*
    The apiKey values in the below example are valid for the preview SDK.
    At general availability, these values will change.
    You can see apikeys information with the link below
    https://msdn.microsoft.com/en-us/skype/websdk/apiproductkeys 
    */
    apiKey: 'a42fcebd-5b43-4b89-a065-74450fb91255', // You will use it in general purpose
    apiKeyCC: '9c967f6b-a846-4df2-b43d-5167e47d81e1', // You will use it when you use Conversation Control
    resource : 'https://webdir.online.lync.com',//Skype SDK resource.Fixed
    loginurl : 'https://login.microsoftonline.com/common/oauth2/authorize?response_type=token',//Microsoft OAuth login url for AAD.Fixed
    
    //Action Required : Need to set your app's specific value. Please README.MD file and follow "Update config.js" section.
    clientid : '',//client id created in Azure AD
    replyurl : '',//replyurl you set in Azure AD
    appName : ''//Application Name registered in Azure AD
};