import { Page, Locator } from '@playwright/test';

export class SignupLoginPage {
  private readonly nameInput: Locator;
  private readonly emailInput: Locator;
  private readonly signupButton: Locator;
  private readonly emailAlreadyExistsError: Locator;

  constructor(private page: Page) {
    this.nameInput = page.getByPlaceholder('Name');
    this.emailInput = page.locator('[data-qa="signup-email"]');
    this.signupButton = page.locator('[data-qa="signup-button"]');
    this.emailAlreadyExistsError = page.locator('p:text("Email Address already exist!")');
  }

  async fillSignupName(name: string): Promise<void> {
    await this.nameInput.fill(name);
  }

  async fillSignupEmail(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  async clickSignupButton(): Promise<void> {
    await this.signupButton.click();
  }

  async getEmailAlreadyExistsText(): Promise<string | null> {
    return this.emailAlreadyExistsError.textContent();
  }
}
