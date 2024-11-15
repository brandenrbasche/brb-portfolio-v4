export interface ListItemType {
    title: string;
    description: string;
    link?: string; // optional in case of Modal
    startDate: string;
    endDate?: string; // optional to allow for current positions
    location?: string; // optional location field
    isModal: boolean;
}