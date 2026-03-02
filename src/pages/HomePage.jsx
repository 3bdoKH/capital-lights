import React from 'react';
import Hero from '../components/Hero/Hero';
import AboutSnapshot from '../components/AboutSnapshot/AboutSnapshot';
import Services from '../components/Services/Services';
import ProjectsPreview from '../components/ProjectsPreview/ProjectsPreview';
import Clients from '../components/Clients/Clients';
import CTABanner from '../components/CTABanner/CTABanner';

export default function HomePage() {
    return (
        <main>
            <Hero />
            <AboutSnapshot />
            <Services />
            <ProjectsPreview />
            <Clients />
            <CTABanner />
        </main>
    );
}
