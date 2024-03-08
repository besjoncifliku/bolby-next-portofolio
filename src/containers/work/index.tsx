import React, {useState,useEffect} from 'react'
import '../../sass/_general.scss';
import { ProjectView } from "@/components/project/ProjectView";
import { useInView, animated } from '@react-spring/web'
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import { buildInteractionObserverThreshold } from "@/utils/Threshold.utils";

export const WorkView = () => {
    const [filter, setFilter] = useState('all');
    const [allProjects, setAllProjects] = useState<any[]>([]);
    const [projects, setProjects] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    const filtersProject: {[key: string]: string} = {
        'all': 'See All',
        'javascript': 'Javascript',
        'python': 'Python',
        'java': 'Java',
        'other': 'Other'
    };

    const handleSearchProjects = (event: any): void => {
        event.preventDefault();
        setSearchTerm(event.target.value ?? '');
        setFilter('all');
        const filterProjectsBySearchTerm = allProjects.filter(
            project =>
                project.title.toLowerCase().includes(event.target.value.toLowerCase())
                || project.description.toLowerCase().includes(event.target.value.toLowerCase()));
        console.log(filterProjectsBySearchTerm);
        setProjects(filterProjectsBySearchTerm);
    }

    const handleSelectFilter = (filterBy: string): void => {
        setSearchTerm('');
        setFilter(filterBy);
        const filteredProjects = allProjects.filter(project => project.category.indexOf(filterBy) !== -1);
        setProjects(filteredProjects);
    }

    const getData = (): void => {
        fetch('./projects.json',{
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(async (response): Promise<void> => {
            const projectsResponse = await response.json();
            setAllProjects(projectsResponse);
            setProjects(projectsResponse);
        });
    }

    useEffect(()=> {
        getData();
    },[]);

    const [ref, springs] = useInView(
        () => ({
            from: {
                opacity: 0,
                y: 180,
            },
            to: {
                opacity: 1,
                y: 0,
            }
        }),
        {
            rootMargin: '10% 0px 2% 0px',
            amount: buildInteractionObserverThreshold(),
        }
    );

    return (
        <animated.div className="work" ref={ref} style={springs}>
            <h2 className={'header-title'}>Recent Projects<span>.</span></h2>
            <div className={'work-section'}>
                <div className={'work-filter flex relative items-center'}>
                    {Object.entries(filtersProject).map(([filterKey, filterDisplayName]) => (
                        <a href={`/#`}
                           key={filterKey}
                           className={filter === filterKey ? 'active' : ''}
                           onClick={() => handleSelectFilter(filterKey)}
                        >
                            {filterDisplayName}
                        </a>
                    ))}

                    <div className={'search-bar absolute right-7 w-5/12'}>
                        <label htmlFor="simple-search">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <PlaylistAddCheckIcon className={"w-8 h-8 text-gray-500 dark:text-gray-400"} />
                            </div>
                            <input type="text" id="simple-search"
                                   className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                   placeholder="Search project ..."
                                   onChange={(e) => handleSearchProjects(e)}
                                   value={searchTerm}
                            />
                        </div>
                    </div>
                </div>
                <div className={'project-section'}>
                    <ProjectView projects={projects} category={filter} />
                </div>
            </div>
        </animated.div>
    );
}

