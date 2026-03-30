import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  async navigate(): Promise<void> {
    await this.page.goto('https://www.automationexercise.com/');
  }

  async clickSignupLogin(): Promise<void> {
    await this.page.getByRole('link', { name: 'Signup / Login' }).click();
  }
}
