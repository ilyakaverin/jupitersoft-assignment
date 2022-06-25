export interface DatabaseElement {
  id: number;
  tag: string;
  name: string;
  srcWebp: string;
  srcPng: string;
}

export const getTags = (database: DatabaseElement[]): string[] => {
  const databaseTags: string[] = database.map((item) => item.tag);

  return Array.from(new Set(databaseTags));
};
export const getProjectItems = (database: DatabaseElement[], count: number): DatabaseElement[] => database.filter((item) => item.id <= count);
