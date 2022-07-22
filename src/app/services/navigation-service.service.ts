import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationServiceService {

  private history: string[] = []
  constructor(private router: Router, private location: Location) { }

  public startSaveHistory(): void {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.history.push(event.urlAfterRedirects);
      }
    })
  }

  public getHistory(): string[] {
    return this.history
  }

  public goBack(): void {
    this.history.pop

    if (this.history.length > 0) {
      this.location.back()
    } else {
      this.router.navigateByUrl("/")
    }
  }

  public getPreviousUrl(): string {
    if (this.history.length > 0) {
      return this.history[this.history.length -2]
    }

    return ''
  }
}
