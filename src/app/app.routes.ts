import { ReservationsComponent } from './reservations/reservations.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { PricelistComponent } from './pricelist/pricelist.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent   
    },
    {
        path: 'about',
        component: AboutComponent   
    },
    {
        path: 'services',
        component: ServicesComponent   
    },
    {
        path: 'pricelist',
        component: PricelistComponent   
    },
    {
        path: 'contact',
        component: ContactComponent   
    },

    {
        path: 'gallery',
        component: GalleryComponent   
    },
    {
        path: 'reservations',
        component: ReservationsComponent   
    }
];
