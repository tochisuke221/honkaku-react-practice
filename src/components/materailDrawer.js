import { useState } from 'react'
import { homedir, Mail, Info, AccountInfo  } from '@mui/icons-material'
import { Box, Button, Drawer, List, ListItem, listItemButton, ListItemText, ListItemIcon } from '@mui/material'

const menu = [
    { title: 'ホーム', href: 'home.html', icon: Home },
    { title: '問い合わせ', href: 'contact.html', icon: Mail },
    { title: '会社概要', href: 'company.html', icon: Info  },
    { title: 'サイトマップ', href: 'sitemap.html', icon: AccountTree },
];

const MaterialDrawer 
