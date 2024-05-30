'use server'

import { sql } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function deleteCard(id: string) {
  try {
    await sql`DELETE FROM data WHERE id = ${id}`;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch revenue data.');
  }
  revalidatePath('/projects');
  revalidatePath('/projects/[id]', 'page');
  redirect('/projects');
}

export async function addCard(formData: FormData) {
  const title = formData.get('title') as string
  const text = formData.get('text') as string
  const act = formData.get('act') as string
  const owner = formData.get('owner') as string

  try {
    await sql`
    INSERT INTO data (owner, act, title, text)
    VALUES (${owner}, ${act}, ${title}, ${text})
  `;
  } catch (error) {
    console.error('Database Error:', error);
    throw new Error('Failed to fetch data.');
  }
  revalidatePath('/projects');
  revalidatePath('/projects/[id]', 'page');
  redirect('/projects');
}
