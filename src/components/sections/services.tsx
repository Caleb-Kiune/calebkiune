import { services } from '@/lib/constants/services';
import { SectionHeading } from '@/components/ui/section-heading';
import { Smartphone, Layout, Server, Database, Code, Globe } from 'lucide-react'; // Import potential icons
import { cn } from '@/lib/utils';

// Helper to map string icon names to Lucide components if needed, 
// or just use a default for now since we are mapping from data that might have string names.
const IconMap: Record<string, any> = {
    "Smartphone": Smartphone,
    "Layout": Layout,
    "Server": Server,
    "Database": Database,
    "Code": Code,
    "Globe": Globe
};

export function Services() {
    return (
        <section className="py-12 md:py-20 lg:py-24 bg-slate-50/50" id="services">
            <div className="container px-4 md:px-6 mx-auto">
                <SectionHeading
                    title="My Expertise"
                    subtitle="Bridging the gap between complex technical problems and seamless user experiences."
                    className="mb-8 md:mb-12"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const IconComponent = service.icon ? IconMap[service.icon] : Code; // Default to Code icon
                        const isMobileFirst = service.title === "Mobile-First Optimization";

                        return (
                            <div
                                key={index}
                                className={cn(
                                    "group relative overflow-hidden rounded-lg bg-white p-6 shadow-sm transition-all hover:shadow-md border",
                                    isMobileFirst ? "border-primary/50 ring-1 ring-primary/10" : "border-slate-100"
                                )}
                            >
                                <div className="flex flex-col gap-4">
                                    <div className={cn(
                                        "p-3 w-fit rounded-lg",
                                        isMobileFirst ? "bg-primary/10 text-primary" : "bg-slate-100 text-slate-700"
                                    )}>
                                        <IconComponent className="h-6 w-6" />
                                    </div>

                                    <div className="space-y-2">
                                        <h3 className="font-bold text-xl">{service.title}</h3>
                                        <p className="text-slate-500 text-sm leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {/* Fallback content if services array is small for the grid, just to show grid structure if needed, 
              but for now we strictly render what is in the constants file as requested. 
              The user only asked to "Hardcode the service data we created". 
              If the array is short, the grid will just have fewer items. 
          */}
                </div>
            </div>
        </section>
    );
}
