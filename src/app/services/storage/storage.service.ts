import { Injectable } from '@angular/core';

export enum StorageType {
  TOKEN = 'token'
}

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {
  }

  /**
   * Retrieve storage item using its identifier
   */
  public getStorageItem(type: StorageType, session?: boolean): string {
    if (session) {
      return sessionStorage.getItem(type);
    } else {
      return localStorage.getItem(type);
    }
  }

  /**
   * Set storage item using its identifier
   */
  public setStorageItem(type: StorageType, str: string | number, session?: boolean): void {
    if (session) {
      sessionStorage.setItem(type, str as string);
    } else {
      localStorage.setItem(type, str as string);
    }
  }

  /**
   * Remove storage item using its identifier
   */
  public removeStorageItem(type: StorageType, session?: boolean): void {
    if (session) {
      sessionStorage.removeItem(type);
    } else {
      localStorage.removeItem(type);
    }
  }
}
