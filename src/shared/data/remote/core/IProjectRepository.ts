import {ProjectStatus} from "../../../enum/ProjectStatus.ts";
import {PostgrestSingleResponse} from "@supabase/supabase-js";

export interface RequestCreateProject {
    title: string;
    description: string;
    status: ProjectStatus;
    startAt: string;
    value: number;
}

export abstract class IProjectRepository {
    abstract createProject(request : RequestCreateProject) : Promise<PostgrestSingleResponse<{ id: string }[]>>
}