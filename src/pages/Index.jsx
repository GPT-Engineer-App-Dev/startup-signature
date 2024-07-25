import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Rocket, Users, Zap, ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="py-6 px-4 md:px-8">
        <h1 className="text-3xl font-bold text-blue-600">StartupX</h1>
      </header>
      
      <main className="container mx-auto px-4 md:px-8">
        <section className="text-center py-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Revolutionize Your Business</h2>
          <p className="text-xl text-gray-600 mb-8">We help startups scale their operations and reach new heights.</p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 py-16">
          <Card>
            <CardHeader>
              <Rocket className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Fast Growth</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Accelerate your startup's growth with our proven strategies and tools.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Expert Team</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Our experienced team provides guidance every step of the way.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Zap className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Innovative Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Stay ahead of the curve with cutting-edge technology and methodologies.</p>
            </CardContent>
          </Card>
        </section>

        <section className="text-center py-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Take Off?</h2>
          <p className="text-xl text-gray-600 mb-8">Join hundreds of startups that have transformed their businesses with us.</p>
          <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
            Learn More
          </Button>
        </section>
      </main>

      <footer className="bg-gray-100 py-8 px-4 md:px-8 text-center">
        <p className="text-gray-600">&copy; 2023 StartupX. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;