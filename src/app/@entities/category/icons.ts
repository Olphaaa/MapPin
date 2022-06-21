import * as L from 'leaflet';

import { Item } from './items';

export class Icon {
    static ANCHOIS          = L.icon({ iconUrl: 'assets/item/anchois.png', iconSize: [70, 70] });
    static BLAIREAU         = L.icon({ iconUrl: 'assets/item/blaireau.png', iconSize: [70, 70] });
    static BROCHET          = L.icon({ iconUrl: 'assets/item/brochet.png', iconSize: [70, 70] });
    static CANARD           = L.icon({ iconUrl: 'assets/item/canard.png', iconSize: [70, 70] });
    static CEPE             = L.icon({ iconUrl: 'assets/item/cepe.png', iconSize: [70, 70] });
    static CERISE           = L.icon({ iconUrl: 'assets/item/cerise.png', iconSize: [70, 70] });
    static CHEVREUIL        = L.icon({ iconUrl: 'assets/item/chevreuil.png', iconSize: [70, 70] });
    static CRABE            = L.icon({ iconUrl: 'assets/item/crabe.png', iconSize: [70, 70] });
    static CREVETTE         = L.icon({ iconUrl: 'assets/item/crevette.png', iconSize: [70, 70] });
    static DAURADE          = L.icon({ iconUrl: 'assets/item/daurade.png', iconSize: [70, 70] });
    static ECREVISSE        = L.icon({ iconUrl: 'assets/item/ecrevisse.png', iconSize: [70, 70] });
    static ECUREUIL         = L.icon({ iconUrl: 'assets/item/ecureuil.png', iconSize: [70, 70] });
    static ESCARGOT         = L.icon({ iconUrl: 'assets/item/escargot.png', iconSize: [70, 70] });
    static FRAISE           = L.icon({ iconUrl: 'assets/item/fraise.png', iconSize: [70, 70] });
    static FRAMBOISE        = L.icon({ iconUrl: 'assets/item/framboise.png', iconSize: [70, 70] });
    static GIROLLE          = L.icon({ iconUrl: 'assets/item/girolle.png', iconSize: [70, 70] });
    static GRENOUILLE       = L.icon({ iconUrl: 'assets/item/grenouille.png', iconSize: [70, 70] });
    static HERISSON         = L.icon({ iconUrl: 'assets/item/herisson.png', iconSize: [70, 70] });
    static HOMAR            = L.icon({ iconUrl: 'assets/item/homar.png', iconSize: [70, 70] });
    static LACTAIRE         = L.icon({ iconUrl: 'assets/item/lactaire.png', iconSize: [70, 70] });
    static LAPIN            = L.icon({ iconUrl: 'assets/item/lapin.png', iconSize: [70, 70] });
    static LOUP             = L.icon({ iconUrl: 'assets/item/loup.png', iconSize: [70, 70] });
    static MAQUEREAU        = L.icon({ iconUrl: 'assets/item/maquereau.png', iconSize: [70, 70] });
    static MORILLE          = L.icon({ iconUrl: 'assets/item/morille.png', iconSize: [70, 70] });
    static MOULE            = L.icon({ iconUrl: 'assets/item/moule.png', iconSize: [70, 70] });
    static MURE             = L.icon({ iconUrl: 'assets/item/mure.png', iconSize: [70, 70] });
    static OURS             = L.icon({ iconUrl: 'assets/item/ours.png', iconSize: [70, 70] });
    static POIRE            = L.icon({ iconUrl: 'assets/item/poire.png', iconSize: [70, 70] });
    static POMME            = L.icon({ iconUrl: 'assets/item/pomme.png', iconSize: [70, 70] });
    static POULPE           = L.icon({ iconUrl: 'assets/item/poulpe.png', iconSize: [70, 70] });
    static RENARD           = L.icon({ iconUrl: 'assets/item/renard.png', iconSize: [70, 70] });
    static ROSE_DES_PRES    = L.icon({ iconUrl: 'assets/item/rose_des_pres.png', iconSize: [70, 70] });
    static SANGLIER         = L.icon({ iconUrl: 'assets/item/sanglier.png', iconSize: [70, 70] });
    static THON             = L.icon({ iconUrl: 'assets/item/thon.png', iconSize: [70, 70] });
    static TRUFFE           = L.icon({ iconUrl: 'assets/item/truffe.png', iconSize: [70, 70] });
    static TRUITE           = L.icon({ iconUrl: 'assets/item/truite.png', iconSize: [70, 70] });

    static getAll() {
        return [
            Icon.ANCHOIS,
            Icon.BLAIREAU,
            Icon.BROCHET,
            Icon.CANARD,
            Icon.CEPE,
            Icon.CERISE,
            Icon.CHEVREUIL,
            Icon.CRABE,
            Icon.CREVETTE,
            Icon.DAURADE,
            Icon.ECREVISSE,
            Icon.ECUREUIL,
            Icon.ESCARGOT,
            Icon.FRAISE,
            Icon.FRAMBOISE,
            Icon.GIROLLE,
            Icon.GRENOUILLE,
            Icon.HERISSON,
            Icon.HOMAR,
            Icon.LACTAIRE,
            Icon.LAPIN,
            Icon.LOUP,
            Icon.MAQUEREAU,
            Icon.MORILLE,
            Icon.MOULE,
            Icon.MURE,
            Icon.OURS,
            Icon.POIRE,
            Icon.POMME,
            Icon.POULPE,
            Icon.RENARD,
            Icon.ROSE_DES_PRES,
            Icon.SANGLIER,
            Icon.THON,
            Icon.TRUFFE,
            Icon.TRUITE
        ]
    }

    public static getIcon(item: Item) {
        switch (item) {
            case Item.ANCHOIS: return Icon.ANCHOIS;
            case Item.BLAIREAU: return Icon.BLAIREAU;
            case Item.BROCHET: return Icon.BROCHET;
            case Item.CANARD: return Icon.CANARD;
            case Item.CEPE: return Icon.CEPE;
            case Item.CERISE: return Icon.CERISE;
            case Item.CHEVREUIL: return Icon.CHEVREUIL;
            case Item.CRABE: return Icon.CRABE;
            case Item.CREVETTE: return Icon.CREVETTE;
            case Item.DAURADE: return Icon.DAURADE;
            case Item.ECREVISSE: return Icon.ECREVISSE;
            case Item.ECUREUIL: return Icon.ECUREUIL;
            case Item.ESCARGOT: return Icon.ESCARGOT;
            case Item.FRAISE: return Icon.FRAISE;
            case Item.FRAMBOISE: return Icon.FRAMBOISE;
            case Item.GIROLLE: return Icon.GIROLLE;
            case Item.GRENOUILLE: return Icon.GRENOUILLE;
            case Item.HERISSON: return Icon.HERISSON;
            case Item.HOMAR: return Icon.HOMAR;
            case Item.LACTAIRE: return Icon.LACTAIRE;
            case Item.LAPIN: return Icon.LAPIN;
            case Item.LOUP: return Icon.LOUP;
            case Item.MAQUEREAU: return Icon.MAQUEREAU;
            case Item.MORILLE: return Icon.MORILLE;
            case Item.MOULE: return Icon.MOULE;
            case Item.MURE: return Icon.MURE;
            case Item.OURS: return Icon.OURS;
            case Item.POIRE: return Icon.POIRE;
            case Item.POMME: return Icon.POMME;
            case Item.POULPE: return Icon.POULPE;
            case Item.RENARD: return Icon.RENARD;
            case Item.ROSE_DES_PRES: return Icon.ROSE_DES_PRES;
            case Item.SANGLIER: return Icon.SANGLIER;
            case Item.THON: return Icon.THON;
            case Item.TRUFFE: return Icon.TRUFFE;
            case Item.TRUITE: return Icon.TRUITE;
        }
    }
}
