import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
    CheckCircle, Megaphone, Search, UserCheck, Award, Target, BookOpen, ShieldCheck, Users,
    Trophy, Globe, Handshake, Briefcase, PieChart, FileText, Gift, Ruler, Network, ArrowUpCircle, RefreshCw
} from "lucide-react";

const stages = [
    {
        number: "01",
        title: "Sensibilización y Compromiso",
        description: "Involucramos a toda la comunidad universitaria —autoridades, docentes, estudiantes y administrativos— para asumir el compromiso conjunto de la calidad educativa.",
        icon: Megaphone,
        color: "text-blue-600",
        bg: "bg-blue-100"
    },
    {
        number: "02",
        title: "Autoevaluación",
        description: "Examinamos críticamente nuestros propios procesos, evaluando aspectos académicos, de gestión e investigación para identificar fortalezas y áreas de mejora.",
        icon: Search,
        color: "text-indigo-600",
        bg: "bg-indigo-100"
    },
    {
        number: "03",
        title: "Evaluación Externa",
        description: "Expertos externos audit an nuestra facultad para corroborar objetivamente que lo reportado en la autoevaluación refleja la realidad de nuestra calidad.",
        icon: UserCheck,
        color: "text-purple-600",
        bg: "bg-purple-100"
    },
    {
        number: "04",
        title: "Acreditación",
        description: "El organismo acreditador otorga la certificación oficial, iniciando un nuevo ciclo de mejora continua para mantener la excelencia alcanzada.",
        icon: Award,
        color: "text-emerald-600",
        bg: "bg-emerald-100"
    }
];

const benefits = [
    {
        text: "Consolidación de una cultura de calidad, evaluación permanente, responsabilidad institucional y rendición de cuentas.",
        icon: Trophy,
        color: "text-amber-500",
        bg: "bg-amber-50"
    },
    {
        text: "Reconocimiento público del cumplimiento de estándares nacionales de calidad educativa establecidos por el SINEACE.",
        icon: Globe,
        color: "text-sky-500",
        bg: "bg-sky-50"
    },
    {
        text: "Fortalecimiento del compromiso académico de docentes, estudiantes y personal administrativo con la mejora continua del programa.",
        icon: Handshake,
        color: "text-rose-500",
        bg: "bg-rose-50"
    },
    {
        text: "Mayor competitividad e inserción profesional de los egresados, facilitando el reconocimiento de títulos y grados académicos a nivel nacional e internacional.",
        icon: Briefcase,
        color: "text-blue-500",
        bg: "bg-blue-50"
    },
    {
        text: "Optimización del uso de los recursos institucionales, al identificar fortalezas, brechas y oportunidades de mejora.",
        icon: PieChart,
        color: "text-green-500",
        bg: "bg-green-50"
    },
    {
        text: "Disponibilidad de información sistematizada y confiable sobre el desempeño académico y la gestión del programa.",
        icon: FileText,
        color: "text-slate-500",
        bg: "bg-slate-50"
    },
    {
        text: "Aseguramiento de la calidad de la formación profesional, la investigación, la extensión universitaria y la vinculación con el entorno.",
        icon: ShieldCheck,
        color: "text-indigo-500",
        bg: "bg-indigo-50"
    },
    {
        text: "Acceso a incentivos y ventajas comparativas, en concordancia con las políticas públicas y los beneficios contemplados por el Estado.",
        icon: Gift,
        color: "text-purple-500",
        bg: "bg-purple-50"
    }
];

const modelPoints = [
    {
        title: "Estándares y Criterios",
        description: "Define estándares y criterios de calidad que describen las características deseables del programa académico.",
        icon: Ruler
    },
    {
        title: "Enfoque Sistémico",
        description: "Promueve un enfoque sistémico, considerando de manera integral los procesos académicos, de gestión, investigación, responsabilidad social e infraestructura.",
        icon: Network
    },
    {
        title: "Referente de Mejora",
        description: "Sirve como referente fundamental para la mejora continua, la toma de decisiones y la rendición de cuentas ante la sociedad.",
        icon: ArrowUpCircle
    },
    {
        title: "Alineamiento Institucional",
        description: "Permite alinear los procesos de la FISI con los compromisos institucionales de la UNMSM y las demandas del entorno profesional y social.",
        icon: RefreshCw
    }
];

export default function AcreditacionPage() {
    return (
        <div className="bg-background min-h-screen">
            {/* Hero Section */}
            <div className="bg-secondary/30 py-16 md:py-24">
                <div className="container mx-auto max-w-5xl px-4 md:px-6 text-center space-y-6">
                    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 mb-4">
                        Calidad Educativa
                    </div>
                    <h1 className="font-headline text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary">
                        Procesos de Acreditación
                    </h1>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                        El camino hacia la excelencia académica de la Facultad de Ingeniería de Sistemas e Informática de la UNMSM.
                    </p>
                </div>
            </div>

            {/* Definition Section */}
            <section className="py-16 bg-background">
                <div className="container mx-auto max-w-5xl px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold font-headline text-foreground">¿Qué es la Acreditación?</h2>
                            <div className="h-1 w-20 bg-primary rounded-full"></div>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                Es el reconocimiento oficial que certifica la excelencia educativa de la Facultad de Ingeniería de Sistemas e Informática (FISI) de la UNMSM.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                Este sello de calidad garantiza que nuestra formación profesional cumple con los más altos estándares nacionales e internacionales, asegurando una educación pertinente, rigurosa y comprometida con la mejora continua.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                                <div className="flex items-center gap-2">
                                    <Target className="h-5 w-5 text-primary" />
                                    <span className="font-medium">Exigencia Académica</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="h-5 w-5 text-primary" />
                                    <span className="font-medium">Gestión Eficiente</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="h-5 w-5 text-primary" />
                                    <span className="font-medium">Responsabilidad Social</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BookOpen className="h-5 w-5 text-primary" />
                                    <span className="font-medium">Formación de Vanguardia</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-muted/50 rounded-2xl p-8 border border-border flex items-center justify-center min-h-[300px]">
                            {/* Placeholder for an illustrative image or graphic */}
                            <div className="text-center space-y-4 opacity-70">
                                <Award className="h-24 w-24 mx-auto text-primary/40" />
                                <p className="text-sm font-medium text-muted-foreground">Compromiso con la Calidad</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stages Section */}
            <section className="py-16 bg-secondary/20">
                <div className="container mx-auto max-w-6xl px-4 md:px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl font-bold font-headline">El Camino hacia la Calidad</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">Nuestro proceso de acreditación se desarrolla en cuatro fases fundamentales que aseguran la mejora continua.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stages.map((stage, index) => (
                            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                                <div className={`absolute top-0 left-0 w-1 h-full ${stage.color.replace('text-', 'bg-')}`}></div> {/* Stripe decoration */}
                                <CardHeader className="pb-2">
                                    <div className={`w-12 h-12 rounded-xl ${stage.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        <stage.icon className={`h-6 w-6 ${stage.color}`} />
                                    </div>
                                    <div className="text-4xl font-bold text-muted/20 absolute top-4 right-4 font-mono select-none">{stage.number}</div>
                                    <CardTitle className="text-xl font-bold">{stage.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground text-sm leading-relaxed">{stage.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 bg-background">
                <div className="container mx-auto max-w-6xl px-4 md:px-6">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-3xl font-bold font-headline">Beneficios de la Acreditación</h2>
                        <div className="h-1 w-20 bg-primary rounded-full mx-auto"></div>
                        <p className="text-muted-foreground max-w-3xl mx-auto">
                            La acreditación genera valor compartido para la comunidad universitaria y la sociedad, garantizando excelencia y transparencia.
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {benefits.map((item, index) => (
                            <Card key={index} className="shadow-sm hover:shadow-lg transition-all duration-300 border-t-4 hover:-translate-y-1" style={{ borderTopColor: 'currentColor' }}>
                                <CardContent className="pt-6">
                                    <div className={`w-12 h-12 rounded-full ${item.bg} flex items-center justify-center mb-4 mx-auto`}>
                                        <item.icon className={`h-6 w-6 ${item.color}`} />
                                    </div>
                                    <p className="text-center text-sm text-foreground/80 leading-relaxed font-medium">
                                        {item.text}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Models Section */}
            <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
                <div className="container mx-auto max-w-5xl px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1 grid gap-6">
                            {modelPoints.map((point, index) => (
                                <div key={index} className="flex gap-4">
                                    <div className="bg-primary/10 p-3 rounded-lg h-fit">
                                        <point.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg mb-2">{point.title}</h3>
                                        <p className="text-muted-foreground text-sm leading-relaxed">{point.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="order-1 lg:order-2 space-y-6">
                            <h2 className="text-3xl font-bold font-headline">Los Modelos de Acreditación</h2>
                            <h3 className="text-xl font-semibold text-primary">Enfoque SINEACE – FISI UNMSM</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                Los modelos de acreditación constituyen los instrumentos técnicos que orientan los procesos de autoevaluación y evaluación externa, permitiendo valorar objetivamente el nivel de calidad alcanzado.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                En la FISI, aplicamos el modelo del SINEACE para alinear nuestros procesos con los compromisos institucionales de la UNMSM y las demandas del entorno profesional.
                            </p>
                            <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg border border-border/50 mt-6">
                                <p className="italic font-medium text-center text-foreground/90">
                                    "La aplicación del modelo SINEACE reafirma nuestro compromiso con la excelencia académica y la transparencia institucional."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
