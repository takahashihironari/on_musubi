export class User {
  private name: string;
  private email: string;
  private password: string;

  constructor(name: string, email: string, password: string) {
    this.name = name;
    this.email = email;
    this.password = password;
  }

  getUserName(): string {
    return this.name;
  }

  setUserName(name: string): void {
    if (!name || name.trim() === '') {
      throw new Error('Name cannot be empty');
    }
    this.name = name;
  }

  getEmail(): string {
    return this.email;
  }

  setEmail(email: string): void {
    if (!email || !email.includes('@')) {
      throw new Error('Invalid email address');
    }
    this.email = email;
  }

  getPassword(): string {
    return this.password;
  }

  setPassword(password: string): void {
    if (!password || password.length < 8) {
      throw new Error('Password must be at least 8 characters');
    }
    this.password = password;
  }

  validatePassword(inputPassword: string): boolean {
    return this.password === inputPassword;
  }
}
