import { Injectable } from '@angular/core';
import { Role } from 'src/app/auth/models/user.model';

type BannerColors = {
  colorOne: string;
  colorTwo: string;
  colorThree: string;
};

@Injectable({
  providedIn: 'root',
})
export class BannerColorService {
  bannerColors: BannerColors = {
    colorOne: '#a0b4b7',
    colorTwo: '#dbe7e9',
    colorThree: '#bfd3d6',
  };

  constructor() {}

  getBannerColors(role: Role): BannerColors {
    switch (role) {
      case 'admin':
        return {
          colorOne: '#510364',
          colorTwo: '#7e2372',
          colorThree: '#bb7cbd',
        };

        case 'headmaster':
          return {
            colorOne: '#bc8f8f',
            colorTwo: '#c09999',
            colorThree: '#fafad2',
          };

        case 'user':
          return {
            colorOne: '#a0b4b7',
            colorTwo: '#dbe7e9',
            colorThree: '#bfd3d6',
        };

      default:
        return this.bannerColors;
    }
  }
}