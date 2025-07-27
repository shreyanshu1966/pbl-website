import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import Button, { PrimaryButton, SecondaryButton, CTAButton } from './Button';
import { FeatureCard, StatCard, EventCard, ProjectCard } from './Card';
import { FormField, FormInput, FormTextarea, ContactForm } from './Form';
import Icon from './Icon';

// Example page demonstrating all components
const ComponentShowcase = () => {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  return (
    <div className="container py-20">
      <h1 className="text-4xl font-bold text-center mb-16">Component Showcase</h1>
      
      {/* Button Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Button Components</h2>
        <div className="flex flex-wrap gap-4">
          <PrimaryButton icon={<Icon name="rocket" />}>Primary Button</PrimaryButton>
          <SecondaryButton icon={<Icon name="star" />}>Secondary Button</SecondaryButton>
          <CTAButton>Call to Action</CTAButton>
          <Button variant="outline" icon={<Icon name="download" />}>Download</Button>
          <Button variant="ghost" loading>Loading...</Button>
        </div>
      </section>

      {/* Card Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Card Components</h2>
        
        <div className="responsive-grid mb-8">
          <FeatureCard
            icon="brain"
            title="Problem-Based Learning"
            description="Learn through real-world challenges and collaborative problem-solving"
            href="#"
          />
          <FeatureCard
            icon="team"
            title="Team Collaboration"
            description="Work with diverse teams to develop communication and leadership skills"
            href="#"
          />
          <FeatureCard
            icon="innovation"
            title="Innovation Hub"
            description="Access cutting-edge technology and resources for your projects"
            href="#"
          />
        </div>

        <div className="responsive-grid-4 mb-8">
          <StatCard
            number="500+"
            label="Students Enrolled"
            icon="education"
            trend="up"
            trendValue="+12%"
          />
          <StatCard
            number="50+"
            label="Projects Completed"
            icon="code"
            trend="up"
            trendValue="+8%"
          />
          <StatCard
            number="15+"
            label="Industry Partners"
            icon="target"
          />
          <StatCard
            number="95%"
            label="Success Rate"
            icon="achievement"
          />
        </div>

        <div className="responsive-grid-3">
          <EventCard
            title="Annual Hackathon 2025"
            date="March 15-17, 2025"
            time="9:00 AM - 6:00 PM"
            location="MIT ADT Campus"
            description="Join us for the biggest coding event of the year"
            status="upcoming"
            href="#"
          />
          <ProjectCard
            title="AI-Powered Learning Assistant"
            description="An intelligent tutoring system that adapts to individual learning styles"
            technologies={['React', 'Python', 'TensorFlow', 'Node.js']}
            status="In Progress"
            team="Team Alpha"
            githubUrl="#"
            liveUrl="#"
          />
        </div>
      </section>

      {/* Form Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">Form Components</h2>
        <div className="max-w-2xl">
          <FormProvider {...methods}>
            <ContactForm onSubmit={onSubmit} />
          </FormProvider>
        </div>
      </section>      {/* Icon Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">SVG Icon System</h2>
        <div className="grid grid-cols-6 gap-4 text-center mb-8">
          <div className="p-4 border rounded-lg">
            <Icon name="brain" size={32} className="mx-auto mb-2 text-blue-600" />
            <p className="text-sm">brain</p>
          </div>
          <div className="p-4 border rounded-lg">
            <Icon name="team" size={32} className="mx-auto mb-2 text-green-600" />
            <p className="text-sm">team</p>
          </div>
          <div className="p-4 border rounded-lg">
            <Icon name="code" size={32} className="mx-auto mb-2 text-purple-600" />
            <p className="text-sm">code</p>
          </div>
          <div className="p-4 border rounded-lg">
            <Icon name="rocket" size={32} className="mx-auto mb-2 text-orange-600" />
            <p className="text-sm">rocket</p>
          </div>
          <div className="p-4 border rounded-lg">
            <Icon name="star" size={32} className="mx-auto mb-2 text-yellow-600" />
            <p className="text-sm">star</p>
          </div>
          <div className="p-4 border rounded-lg">
            <Icon name="achievement" size={32} className="mx-auto mb-2 text-red-600" />
            <p className="text-sm">achievement</p>
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-4 text-center">
          <div className="p-4 border rounded-lg">
            <Icon name="mit-adt" size={32} className="mx-auto mb-2 text-indigo-600" />
            <p className="text-sm">mit-adt</p>
          </div>
          <div className="p-4 border rounded-lg">
            <Icon name="pbl-process" size={32} className="mx-auto mb-2 text-teal-600" />
            <p className="text-sm">pbl-process</p>
          </div>
          <div className="p-4 border rounded-lg">
            <Icon name="innovation-hub" size={32} className="mx-auto mb-2 text-pink-600" />
            <p className="text-sm">innovation-hub</p>
          </div>
          <div className="p-4 border rounded-lg">
            <Icon name="collaboration" size={32} className="mx-auto mb-2 text-cyan-600" />
            <p className="text-sm">collaboration</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComponentShowcase;
