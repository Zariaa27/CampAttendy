import mysql from 'mysql2';

export default class DB {
	private static readonly db: mysql.Connection = mysql.createConnection({
		host: 'techno.artivain.com',
		user: 'u26_1qWd3Vkamf',
		password: 'nfAOQ.obYqwlk7J.^1uGrIg^',
		database: 's26_campattendy'
	});

    public static async getOccupant(name: string): Promise<Occupant> {
        return new Promise((resolve, reject) => {
			this.db.query<Occupant[]>(`SELECT * FROM occupants WHERE name = '${name}'`, (error, result) => {
				if (error) reject(error);
				resolve(result[0]);
			});
		});
    }

	public static async getAllFromGroup(group: string): Promise<Occupant[]> {
        return new Promise((resolve, reject) => {
			this.db.query<Occupant[]>(`SELECT * FROM occupants WHERE \`group\` = ${group}`, (error, result) => {
				if (error) reject(error);
				resolve(result);
			});
		});
    }
}

export interface Occupant extends mysql.RowDataPacket {
    id: number;
    name: string;
    age: number;
    group: string;
    allergies: string;
}
