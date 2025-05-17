# Quarto to Hugo Migration Project

## Overview

This project contains a comprehensive plan and implementation guide for migrating Prof. Dr hab. inż. Radosław Juszczak's academic website from Quarto to Hugo. The migration preserves all content, design elements, and functionality while providing a more sustainable and maintainable framework.

## Why Migrate from Quarto to Hugo?

Hugo offers several advantages for academic websites:

- **Academic-focused themes**: Hugo Academic/Hugo Blox is specifically designed for researchers
- **Performance**: Exceptional speed in generating static sites
- **Active community**: Large, active community with extensive resources
- **Simplified maintenance**: Single binary distribution makes updates straightforward
- **Flexible content organization**: Similar organization capabilities for publications, projects, and blog posts

## Migration Documents

This project includes the following migration resources:

1. **[Migration Plan](migration_plan.md)**: Comprehensive strategy document outlining the framework selection rationale, content migration approach, and implementation timeline

2. **[Implementation Guide](migration_implementation_guide.md)**: Step-by-step technical instructions with specific commands and code snippets for executing the migration

3. **Migration Examples**: Concrete examples showing the conversion process
   - [Project Page Example](migration_examples/climate-manipulation.md): Converting a project page from Quarto to Hugo
   - [Publications Migration Example](migration_examples/publications-migration.md): Converting publication data from YAML files to Hugo's format

## Key Migration Steps

1. Set up a new Hugo site with the Academic theme
2. Configure site settings to match current design
3. Migrate content sections (projects, publications, blog posts)
4. Transfer and organize assets (images, fonts)
5. Implement custom styling
6. Set up GitHub Actions for deployment and publication updates
7. Test and deploy

## Timeline

The estimated timeline for complete migration is 9-14 days, depending on the complexity of custom features and the amount of content to be migrated.

## Getting Started

To begin the migration process, follow the detailed steps in the [Implementation Guide](migration_implementation_guide.md).

## Post-Migration Maintenance

The new Hugo-based website will offer several maintenance advantages:

- Simplified updates through Hugo's single binary
- Extensive documentation and community resources
- Mature and well-maintained Academic theme
- Easier separation of content and presentation

## Additional Resources

- [Hugo Academic Documentation](https://docs.hugoblox.com/)
- [Hugo Documentation](https://gohugo.io/documentation/)
- [Markdown Guide](https://www.markdownguide.org/)