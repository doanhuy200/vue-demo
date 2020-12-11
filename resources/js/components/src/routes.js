import Index from './posts/Index';
import Show from './posts/Show';
import Create from './posts/Create';
import Edit from './posts/Edit';

export const routes = [
    {
        name: 'posts',
        path: '/posts',
        component: Index
    },
    {
        name: 'show',
        path: '/posts/:id/show',
        component: Show
    },
    {
        name: 'create',
        path: '/posts/create',
        component: Create
    },
    {
        name: 'edit',
        path: '/posts/:id/edit',
        component: Edit
    },
];
