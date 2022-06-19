export class Item {
    id: string;
    name: string;
    icon: string;

    private constructor(id: string, name: string, icon: string) {
        this.id = id;
        this.name = name;
        this.icon = icon;
    }

    public static ANCHOIS          = new Item('2725af65-0548-47f1-8e0f-c0ffd54834bd', 'Anchois', 'assets/item/anchois.png');
    public static BLAIREAU         = new Item('746e598d-dbc1-4a58-b1ae-f45e03f74cd2', 'Blaireau', 'assets/item/blaireau.png');
    public static BROCHET          = new Item('7054ecac-acff-456f-bb2d-17e4ce5d5f0c', 'Brochet', 'assets/item/brochet.png');
    public static CANARD           = new Item('a43e7a51-0da5-4785-a1f1-3661ddf7388f', 'Canard', 'assets/item/canard.png');
    public static CEPE             = new Item('68044eb5-aaa3-4e7e-b7b1-c566266d8156', 'Cèpe', 'assets/item/cepe.png');
    public static CERISE           = new Item('824c27a0-2435-4488-9bee-dafccca19f6d', 'Cerise', 'assets/item/cerise.png');
    public static CHEVREUIL        = new Item('661345b0-9087-489f-8f09-2b33362824ff', 'Chevreuil', 'assets/item/chevreuil.png');
    public static CRABE            = new Item('836b9398-76fc-4699-99a1-9519b0aa6fe2', 'Crabe', 'assets/item/crabe.png');
    public static CREVETTE         = new Item('560c33f1-e5f6-4637-ac09-ecad2b76ec9d', 'Crevette', 'assets/item/crevette.png');
    public static DAURADE          = new Item('6c5e364c-06ff-40c4-8d39-a1eaa6e7df70', 'Daurade', 'assets/item/daurade.png');
    public static ECREVISSE        = new Item('47bb7eac-b942-4a96-8c8b-0049c7468312', 'Ecrevisse', 'assets/item/ecrevisse.png');
    public static ECUREUIL         = new Item('18bc061a-59d2-475b-8502-c48d242d02bb', 'Ecureuil', 'assets/item/ecureuil.png');
    public static ESCARGOT         = new Item('27b45009-318f-44c1-94ac-47a400db4d30', 'Escargot', 'assets/item/escargot.png');
    public static FRAISE           = new Item('3f97fe95-0ab3-4ead-b0f3-ff12c1af07a5', 'Fraise', 'assets/item/fraise.png');
    public static FRAMBOISE        = new Item('45d8a202-c59a-4b2a-8e6f-6c45c6f41bcd', 'Framboise', 'assets/item/framboise.png');
    public static GIROLLE          = new Item('9cdfab67-757c-409e-aa9c-7b581d0e6e07', 'Girolle', 'assets/item/girolle.png');
    public static GRENOUILLE       = new Item('3faeb485-effb-4715-add2-169b44d0d1d5', 'Grenouille', 'assets/item/grenouille.png');
    public static HERISSON         = new Item('54b73aec-b94c-4a4a-ac3c-f63c23399719', 'Herisson', 'assets/item/herisson.png');
    public static HOMAR            = new Item('7b43908a-eebc-4402-b145-8ea24f0cd284', 'Homar', 'assets/item/homar.png');
    public static LACTAIRE         = new Item('f70d0d14-d3ad-4f87-b253-ad5a1475945b', 'Lactaire', 'assets/item/lactaire.png');
    public static LAPIN            = new Item('449a82c4-e952-4b47-8a6e-8433e5ef4b2b', 'Lapin', 'assets/item/lapin.png');
    public static LOUP             = new Item('44330b03-b4b1-4ad6-8576-83cfcf9cf1ec', 'Loup', 'assets/item/loup.png');
    public static MAQUEREAU        = new Item('765b8097-86a8-4bc4-b50b-cfb0b160a0c8', 'Maquereau', 'assets/item/maquereau.png');
    public static MORILLE          = new Item('db12f41f-6eb5-41c7-b69b-fd390e9438c8', 'Morille', 'assets/item/morille.png');
    public static MOULE            = new Item('8e2c7871-0628-4c7e-94cb-b4a3af5857ec', 'Moule', 'assets/item/moule.png');
    public static MURE             = new Item('eed444ca-5eca-42ae-9cc3-10fb118db9b5', 'Mure', 'assets/item/mure.png');
    public static OURS             = new Item('11e64c70-d8fe-456a-b859-64cb8ab0acb8', 'Ours', 'assets/item/ours.png');
    public static POIRE            = new Item('f9b59121-2d2b-422c-8707-5daf86f37fc7', 'Poire', 'assets/item/poire.png');
    public static POMME            = new Item('20781360-347a-4a75-b418-855f17092e79', 'Pomme', 'assets/item/pomme.png');
    public static POULPE           = new Item('47289cb7-11a5-4600-a09f-c973098014ed', 'Poulpe', 'assets/item/poulpe.png');
    public static RENARD           = new Item('2c1a9ac6-6383-4ffc-984b-b63d0dcefcb8', 'Renard', 'assets/item/renard.png');
    public static ROSE_DES_PRES    = new Item('57fcf975-8846-4745-98c9-c626f746215a', 'Rose des Prés', 'assets/item/rose_des_pres.png');
    public static SANGLIER         = new Item('7638b349-a649-4909-9445-9b672213bb7a', 'Sanglier', 'assets/item/sanglier.png');
    public static THON             = new Item('1ff1739b-79ec-496c-a31e-5e700d783bb3', 'Thon', 'assets/item/thon.png');
    public static TRUFFE           = new Item('cde18428-8fce-4724-8c86-a6c5e595c59f', 'Truffe', 'assets/item/truffe.png');
    public static TRUITE           = new Item('82f86192-b6bb-4dad-8043-4f70135b816f', 'Truite', 'assets/item/truite.png');

    public static getAnimauxSauvages(): Item[] {
        return [
            Item.BLAIREAU,
            Item.CHEVREUIL,
            Item.LOUP,
            Item.OURS,
            Item.RENARD,
            Item.SANGLIER
        ]
    }

    public static getChampignons(): Item[] {
        return [
            Item.CEPE,
            Item.GIROLLE,
            Item.LACTAIRE,
            Item.MORILLE,
            Item.ROSE_DES_PRES,
            Item.TRUFFE
        ]
    }

    public static getFruits(): Item[] {
        return [
            Item.CERISE,
            Item.FRAISE,
            Item.FRAMBOISE,
            Item.MURE,
            Item.POIRE,
            Item.POMME,
        ]
    }

    public static getFruitsDeMer(): Item[] {
        return [
            Item.CRABE,
            Item.CREVETTE,
            Item.ECREVISSE,
            Item.HOMAR,
            Item.MOULE,
            Item.POULPE,
        ]
    }
          
    public static getPetitsAnimaux(): Item[] {
        return [
            Item.CANARD,
            Item.ECUREUIL,
            Item.ESCARGOT,
            Item.GRENOUILLE,
            Item.HERISSON,
            Item.LAPIN
        ]
    }

    public static getPoissons(): Item[] {
        return [
            this.ANCHOIS,
            this.BROCHET,
            this.DAURADE,
            this.MAQUEREAU,
            this.THON,
            this.TRUITE
        ]
    }

}