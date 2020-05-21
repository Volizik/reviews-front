export interface Worker {
    id: string;
    firstName: string;
    lastName: string;
    fatherName: string;
    tin: string;
    photos: Photo[];
    creatorId: number;
    createdAt: string;
    updatedAt: string;
}

export interface Photo {
    id: string;
    src: string;
    workerId: string;
    createdAt: string;
    updatedAt: string;
}
