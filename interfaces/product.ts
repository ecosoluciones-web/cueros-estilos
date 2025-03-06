export interface ModelContentful {
    contentTypeId: string;
    metadata: object;
    sys: object;
    fields: object;
}

export interface ImageModelFul extends ModelContentful {
    fields: {
        title: string;
        description: string;
        file: {
            url: string;
        }
    }
}

export interface ProductFul extends ModelContentful {
    fields: {
        nombre: string;
        imagen: ImageModelFul[];
        descripcion: string;
        precio: number;
        descuento?: number;
        marca: ModelContentful;
        tallas: string[];
        caracteristicas: string[];
    }
}