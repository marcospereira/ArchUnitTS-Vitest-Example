import { projectFiles } from 'archunit';
import { describe, it, expect } from 'vitest';

describe('Naming Conventions', () => {
	it('service files should end with -service.ts', async () => {
		const rule = projectFiles()
			.inFolder('src/services')
			.should()
			.haveName('*-service.ts');

		await expect(rule).toPassAsync();
	});

	it('test files should end with .spec.ts', async () => {
		const rule = projectFiles().inFolder('src/tests').should().haveName('*.spec.ts');
		await expect(rule).toPassAsync();
	});
});
