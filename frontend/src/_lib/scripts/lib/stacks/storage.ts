import { v4 as uuid } from 'uuid';
import { userSession } from './auth';
import { Storage } from '@stacks/storage';

/* @ts-ignore */
const storage = new Storage({ userSession });
const TASKS_FILENAME = 'tasks.json';

/**
 * @typedef {Object} Task
 * @property {boolean} complete
 * @property {string} value
 * @property {string} id
 */

// @type {Task[]}
export const defaultTasks = [
  {
    complete: false,
    value: '',
    id: uuid(),
  },
];

/**
 * Save tasks to Gaia
 * @param {UserSession} userSession
 * @param {Todo[]} tasks
 * @param {boolean} isPublic
 */
export const saveTasks = async (userSession:any, tasks:any, isPublic:boolean) => {
  await storage.putFile(TASKS_FILENAME, JSON.stringify({ tasks, isPublic }), {
    encrypt: !isPublic,
    dangerouslyIgnoreEtag: true,
  });
};

/**
 * Fetch tasks for a specific user. Omit the `username` argument to fetch the current user's tasks.
 *
 * If no tasks are found, and no username is provided, then the default tasks are returned.
 * If tasks are found, we check to see if they are public.
 * @param {import("@stacks/auth").UserSession} userSession
 * @param {string} username - the username to fetch tasks for. Omit this argument or set it to an empty string
 * to fetch the current user's tasks.
 * @returns {{ tasks: Task[] | null, public: boolean }}
 */
export const fetchTasks = async (userSession: any, username: any) => {
  try {
    /** @type {string} raw JSON stored in Gaia */
    const tasksJSON = await storage.getFile(TASKS_FILENAME, {
      decrypt: false,
      username: username || undefined,
    });
    if (tasksJSON && typeof tasksJSON === "object") {
      const json = JSON.parse(tasksJSON.toString());
      if (json.isPublic) {
        return {
          tasks: json.tasks,
          public: true,
        };
      } else {
        if (!username) {
          const decrypted = JSON.parse(await userSession.decryptContent(tasksJSON));
          return {
            tasks: decrypted.tasks,
            public: false,
          };
        }
      }
    } else {
      return {
        tasks: username ? null : defaultTasks,
        public: false,
      };
    }
  } catch (error) {
    if (username) {
      return {
        tasks: null,
      };
    } else {
      return {
        tasks: defaultTasks,
      };
    }
  }
};
