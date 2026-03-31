import { Page, Locator } from '@playwright/test';

export class HomePage {
  private readonly signupLoginLink: Locator;

  constructor(private page: Page) {
    this.signupLoginLink = page.getByRole('link', { name: 'Signup / Login' });
  }

  async navigate(): Promise<void> {
    await this.page.goto('https://www.automationexercise.com/');
  }

  async clickSignupLogin(): Promise<void> {
    await this.signupLoginLink.click();
  }
}
