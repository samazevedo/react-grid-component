import React from 'react'
import { Meta, Story } from '@storybook/react'
import Grid from './Grid'
import Box from '../Box/Box'
import GridRuler from '../GridRuler/GridRuler'
export default {
    title: 'Grid',
    component: Grid,
} as Meta

export const Basic: Story = (args) => (
    <div style={{ position: 'relative' }}>
        <Grid
            container
            spacing='sm'
            justifyContent='space-between'
            alignItems='center'
            style={{ height: '100%' }}
            {...args}
        >
            <Grid item xs={1} sm={6} md={4} lg={3}>
                <Box>Box 1</Box>
            </Grid>
            <Grid item xs={1} sm={6} md={4} lg={3}>
                <Box>Box 2</Box>
            </Grid>
            <Grid item xs={1} sm={6} md={4} lg={3}>
                <Box>Box 3</Box>
            </Grid>
            <Grid item xs={1} sm={6} md={4} lg={3}>
                <Box>Box 4</Box>
            </Grid>
        </Grid>
    </div>
)
export const WithRuler: Story = (args) => (
    <div style={{ position: 'relative' }}>
        <GridRuler spacing='sm'></GridRuler>
        <Grid
            container
            spacing='sm'
            justifyContent='space-between'
            alignItems='center'
            style={{ height: '100%' }}
            {...args}
        >
            <Grid item xs={1} sm={6} md={4} lg={3}>
                <Box>Box 1</Box>
            </Grid>
            <Grid item xs={1} sm={6} md={4} lg={3}>
                <Box>Box 2</Box>
            </Grid>
            <Grid item xs={1} sm={6} md={4} lg={3}>
                <Box>Box 3</Box>
            </Grid>
            <Grid item xs={1} sm={6} md={4} lg={3}>
                <Box>Box 4</Box>
            </Grid>
        </Grid>
    </div>
)
export const Interactive: Story = (args) => (
    <div style={{ position: 'relative', height: '100vh' }}>
        <Grid
            container
            spacing='sm'
            justifyContent='space-between'
            alignItems='center'
            style={{ height: '100%' }}
            {...args}
        >
            <Grid item xs={1}>
                <Box>Box 1</Box>
            </Grid>
            <Grid item xs={1}>
                <Box>Box 2</Box>
            </Grid>
            <Grid item xs={1}>
                <Box>Box 3</Box>
            </Grid>
            <Grid item xs={1}>
                <Box>Box 4</Box>
            </Grid>
        </Grid>
    </div>
)
