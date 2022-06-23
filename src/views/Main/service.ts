


export interface Database {
    id: number,
    tag: string,
    name: string,
    srcWebp: string,
    srcPng: string

}

export const getTags = (database: Database[]) => {

    const databaseTags = database.map(item => item.tag );

    return Array.from(new Set(databaseTags));
}
export const getProjectItems = (database:Database[], count: number)  => database.filter((item) => item.id <= count);
