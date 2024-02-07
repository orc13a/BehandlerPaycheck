import { Client, Account } from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    // .setProject(process.env.PROJECT_ID);65aaaad8be5f2f5aed3b
    .setProject('65aaaad8be5f2f5aed3b');

export const appwriteAccount = new Account(client);
export { ID } from 'appwrite';
