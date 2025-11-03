export interface FilterState {
  genre?: Genre | null;
  type?: CollaborationType | null;
  royalties?: Royalties | null;
  deadline?: Deadline | null;
}


export enum Genre {
  Rock = "rock",
  Pop = "pop",
  Jazz = "jazz",
  Classical = "classical",
}

export enum CollaborationType {
  Composition = "composition",
  Production = "production",
  Feature = "feature",
}

export enum Royalties {
  Paid = "paid",
  Free = "free",
  Negotiable = "negotiable",
}

export enum Deadline {
  Flexible = "flexible",
  OneWeek = "one_week",
  OneMonth = "one_month",
}
