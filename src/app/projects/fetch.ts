import { sql } from '@vercel/postgres';
import { Beats } from './definitions';

export async function fetchData() {
    try {
      const data = await sql<Beats>`SELECT * FROM data`;
      return data.rows;
    } catch (error) {
      console.error('Database Error:', error);
      throw new Error('Failed to fetch revenue data.');
    }
  }