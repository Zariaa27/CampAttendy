import mysql from 'mysql2';

export default class DB {
	private static readonly db: mysql.Connection = mysql.createConnection({
		host: 'techno.artivain.com',
		user: 'u20_RNudNYwTw6',
		password: 'Miea!aqBfc4Dl@mC1kuz55g8',
		database: 's20_zkbot'
	});

    public static async getOccupant(name: string): Promise<string> {
        return new Promise((resolve, reject) => {
			this.db.query<Occupant[]>(`SELECT * FROM occupants WHERE name = '${name}'`, (error, result) => {
				if (error) reject(error);
				resolve(result[0]?.value);
			});
		});
    }
}

export interface Occupant extends mysql.RowDataPacket {
    id: number;
    name: string;
    age: string;
    group: string;
    allergies: string;
}