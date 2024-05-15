import { sql } from '@vercel/postgres';
import { Beats } from './definitions';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function fetchData() {
  try {
    const data = await sql<Beats>`SELECT * FROM data ORDER BY id`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function fetchCardData(id: string) {
  try {
    const data = await sql<Beats>`SELECT title, text FROM data WHERE data.id = ${id}`;
    return data.rows;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
}

export async function updateCard(id: string, formData: FormData) {
  'use server'

  const title = formData.get('title') as string
  const text = formData.get('text') as string

  try {
    await sql`
    UPDATE data
    SET title = ${title}, text = ${text}
    WHERE id = ${id}
  `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
  revalidatePath('/projects');
  redirect('/projects');
}