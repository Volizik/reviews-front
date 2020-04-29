export interface Worker {
    firstName: string;
    lastName: string;
    fatherName: string;
    country: string;
    city: string;
    workingPlace: string;
    position: string;
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