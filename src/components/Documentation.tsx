import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Documentation({
	platformContent,
	articlesContent,
	apiContent,
	geeContent,
}) {
	return (
		<Tabs className="rounded-2xl pt-2" defaultValue="platform">
      {/* Tabs List */}
      <TabsList className="backdrop-blur-2xl bg-teal-900 h-56 sm:h-[56px] rounded-sm b-0 mt-3 flex flex-wrap justify-center mb-3">
        <TabsTrigger className="m-2 text-foreground" value="platform">
          Información sobre la plataforma
        </TabsTrigger>
        <TabsTrigger className="m-2 text-foreground" value="articles">
          Artículos científicos
        </TabsTrigger>
        <TabsTrigger className="m-2 text-foreground" value="api">
          Acceso a la plataforma utilizando la API
        </TabsTrigger>
        <TabsTrigger className="m-2 text-foreground" value="gee">
          Recursos en Google Earth Engine
        </TabsTrigger>
      </TabsList>

      {/* Tabs Content */}
      <TabsContent
        value="platform"
        className="documentation-content mx-4 sm:mx-8 md:mx-16 lg:mx-24 mt-8"
      >
        {platformContent}
      </TabsContent>
      <TabsContent
        value="articles"
        className="documentation-content mx-4 sm:mx-8 md:mx-16 lg:mx-24 mt-8"
      >
        {articlesContent}
      </TabsContent>
      <TabsContent
        value="api"
        className="documentation-content mx-4 sm:mx-8 md:mx-16 lg:mx-24 mt-8"
      >
        {apiContent}
      </TabsContent>
      <TabsContent
        value="gee"
        className="documentation-content mx-4 sm:mx-8 md:mx-16 lg:mx-24 mt-8"
      >
        {geeContent}
      </TabsContent>
    </Tabs>
	);
}
