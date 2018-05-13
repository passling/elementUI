import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../view/layout/Layout'

Vue.use(Router)

const _import = require('./_import_' + process.env.NODE_ENV)
export const constantRouterMap = [
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        name: 'Dashboard',
        hidden: true,
        children: [{
            path: 'dashboard',
            component: _import('dashboard/index')
        }]
    },
    {
        path: '/sales',
        component: Layout,
        redirect: '/sales/special',
        name: '销售',
        meta: {title: '销售', icon: 'fa fa-chart-line fa-lg fa-chart-line-color'},
        children: [
            {
                path: 'special',
                name: '专票',
                component:  _import('sales/special'),
                meta: {
                    title: '专票', icon: ''
                }
            },
            {
                path: 'ordinary',
                name: 'name',
                component:  _import('sales/ordinary'),
                meta: {title:'普票', icon: ''}
            },
            {
                path: 'others',
                name: '其他',
                component:  _import('sales/others'),
                meta: {title:'其他', icon: ''}
            }

        ]

    },
    {
        path: '/purchase',
        component: Layout,
        redirect:  '/purchase/certified',
        name: '采购',
        alwaysShow: true,
        meta: {title: '采购', icon: 'fa fa-shopping-cart fa-lg fa-shopping-cart-color'},
        children:  [
            {
                path: 'certified',
                name: '已认证',
                component: _import('purchase/certified'),
                meta: {title: '已认证', icon: ''}
            },
            {
                path: 'uncertified',
                name: '未认证',
                component: _import('purchase/uncertified'),
                meta: {title: '未认证', icon: ''}
            },
            {
                path: 'ordinary',
                name: '普票',
                component: _import('purchase/ordinary'),
                meta: {title: '普票', icon: ''}
            }
        ]
    },

    {
        path: '/expense',
        component: Layout,
        redirect: '/expense/index',
        name: '费用',
        meta: {title: '费用', icon: 'fa fa-money-bill-alt fa-lg fa-money-bill-alt-color'},
        children: [
            {
                path: 'index',
                // name: '费用',
                component: _import('expense/index'),
                meta: {title: '费用', icon: 'far fa-money-bill-alt fa-lg fa-money-bill-alt-color'}
            }
        ]
    },
    {
        path: '/fund',
        component: Layout,
        redirect: '/fund/gather',
        name: '资金',
        meta: {title: '资金', icon: 'fas fa-yen-sign fa-lg fa-yen-sign-color'},
        children: [
            {
                path: 'gather',
                name: '收款',
                component: _import('fund/gather'),
                meta: {title: '收款', icon: ''}
            },
            {
                path: 'payment',
                name: '付款',
                component: _import('fund/payment'),
                meta: {title: '付款', icon: ''}
            },
            {
                path: 'transfer',
                name: '转款',
                component: _import('fund/transfer'),
                meta: {title: '转款', icon: ''}
            }
        ]
    },
    {
        path: '/salary',
        component: Layout,
        redirect: '/salary/index',
        name: '工资表',
        meta: {title: '工资表', icon: 'fas fa-bar-chart fa-lg fa-bar-chart-color'},
        children: [
            {
                path: 'index',
                // name: '工资表',
                component: _import('salary/index'),
                meta: {title: '工资表', icon: 'fas fa-bar-chart fa-lg fa-bar-chart-color'}
            }
        ]
    },
    {
        path: '/pending',
        component: Layout,
        redirect:'/pending/unconfirmed',
        name: '待用区',
        meta: {title: '待用区', icon: 'fas fa-box fa-lg fa-box-color'},
        children: [
            {
                path: 'unconfirmed ',
                name: '待确认',
                component: _import('pending/unconfirmed'),
                meta: {title: '待确认', icon: ''}
            },
            {
                path: 'retained ',
                name: '留用票',
                component: _import('pending/retained'),
                meta: {title: '留用票', icon: ''}
            },
            {
                path: 'recycle',
                name: '回收站',
                component: _import('pending/recycle'),
                meta: {title: '回收站', icon: ''}
            }
        ]
    }

]
export default new Router({
  routes: constantRouterMap,
  scrollBehavior: () => ({y: 0})

})
