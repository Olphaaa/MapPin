import { Item } from "./items";

export class Category {
    id: string;
    name: string;
    icon: string;
    items: Item[];

    private constructor(id: string, name: string, icon: string, items: Item[]) {
        this.id = id;
        this.name = name;
        this.icon = icon;
        this.items = items
    }

    public static ANIMAL_SAUVAGE   = new Category('6829eb12-6a95-4b81-b41f-a14f829e58b9', 'Animal sauvage', 'assets/category/animal-sauvage.png', Item.getAnimauxSauvages());
    public static CHAMPIGNON       = new Category('5da2e68a-e7d9-4397-ae6c-36a55ef98415', 'Champignon', 'assets/category/champignon.png', Item.getChampignons());
    public static FRUIT            = new Category('10f39a05-783a-4893-94ec-404c51d64fe0', 'Fruit', 'assets/category/fruit.png', Item.getFruits());
    public static FRUIT_DE_MER     = new Category('8d6c462f-d69a-4c49-af74-220bba7d0dfe', 'Fruit de mer', 'assets/category/fruit-de-mer.png', Item.getFruitsDeMer());
    public static PETIT_ANIMAL     = new Category('782a700b-3c74-43df-b738-b68fe813e2aa', 'Petit animal', 'assets/category/petit-animal.png', Item.getPetitsAnimaux());
    public static POISSON          = new Category('8cd45b3e-0eec-43a6-9753-be02582b4810', 'Poisson', 'assets/category/poisson.png', Item.getPoissons());

    public static getAll() {
        return [
            Category.ANIMAL_SAUVAGE,
            Category.CHAMPIGNON,
            Category.FRUIT,
            Category.FRUIT_DE_MER,
            Category.PETIT_ANIMAL,
            Category.POISSON
        ]
    }
}